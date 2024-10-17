import prisma from '../../prisma';

export const getEventStatisticsService = async () => {
  try {
    const payments = await prisma.payment.findMany({
      where: { status: 'DONE' },
      include: { user: true },
    });

    if (!payments) {
      throw new Error('Payment not found');
    }

    return payments;
  } catch (error) {
    throw error;
  }
};
