import prisma from '@/prisma';

export const getPaymentService = async (id: number) => {
  console.log(`getPaymentService called with id: ${id}`);
  try {
    console.log('Querying database for payment');
    const payment = await prisma.payment.findFirst({
      where: { id, isDeleted: false },
      include: {
        user: {
          select: {
            username: true,
          }
        },
        event: {
          select: {
            title: true,  // Assuming events have a title field
          }
        }
      },
    });

    if (!payment) {
      console.log('Payment not found');
      throw new Error('Payment not found');
    }

    console.log('Payment found:', payment);
    return payment;
  } catch (error) {
    console.error('Error in getPaymentService:', error);
    throw error;
  }
};