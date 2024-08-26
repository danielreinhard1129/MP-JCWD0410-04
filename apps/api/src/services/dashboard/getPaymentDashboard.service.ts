import prisma from '../../prisma';

export const getPaymentDashboardService = async (eventId: number, userId: number) => {
  try {
    const payments = await prisma.payment.findMany({
      where: { eventId, isDeleted: false},
      include: {user: true, event: {select: {userId: true}}}
    });

    // if (!payments) {
    //   throw new Error('Payment not found');
    // }

    if (payments) {
      if (payments[0].event.userId !== userId) {
        throw new Error('User unauthorized')
      }
    }

    return payments;
  } catch (error) {
    throw error;
  }
};