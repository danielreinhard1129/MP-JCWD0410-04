import prisma from '../../prisma';

export const getPaymentsService = async (userId: number) => {
  try {
    const payments = await prisma.payment.findMany({
      where: { userId },
      include: { event: { select: { title: true, img: true } } },
    });

    return payments;
  } catch (error) {
    throw error;
  }
};