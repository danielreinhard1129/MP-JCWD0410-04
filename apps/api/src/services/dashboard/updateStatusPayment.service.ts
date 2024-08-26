import { Payment_Status } from '@prisma/client';
import prisma from '../../prisma';

interface Payload {
  id: number;
  status: Payment_Status;
}

export const updateStatusPaymentService = async (body: Payload) => {
  try {
    const { id, status } = body;

    const payment = await prisma.payment.findFirst({
      where: { id },
    });

    if (!payment) {
      throw new Error('Payment not found');
    }

    const updatedPayment = await prisma.payment.update({
      where: { id },
      data: { status },
    });

    return updatedPayment;
  } catch (error) {
    throw error;
  }
};
