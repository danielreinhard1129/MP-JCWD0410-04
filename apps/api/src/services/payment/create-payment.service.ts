import prisma from '@/prisma';

interface CreatePaymentBody {
  qty: number;
  eventId: number;
}

export const createPaymentService = async (
  body: CreatePaymentBody,
  userId: number,
) => {
  try {
    const { qty, eventId} = body;

    const event = await prisma.event.findFirst({
      where: { id: eventId },
    });

    if (!event) {
      throw new Error('Invalid event id');
    }

    if (event.availableSeat < qty) {
      throw new Error('The ticket quota has been exceeded.');
    }

    await prisma.event.update({
      where: { id: eventId },
      data: {
        availableSeat: {
          decrement: qty,
        },
      },
    });

    return await prisma.payment.create({
      data: {
        qty,
        eventId,
        userId,
        total: event.price * qty,
        status: `WAITING_FOR_PAYMENT`,
      },
    });
  } catch (error) {
    throw error;
  }
};