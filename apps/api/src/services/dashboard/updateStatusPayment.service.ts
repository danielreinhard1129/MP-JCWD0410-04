import { Payment_Status } from '@prisma/client';
import prisma from '../../prisma';
import { transporter } from '@/lib/nodemailer';

interface Payload {
  id: number;
  status: Payment_Status;
}

export const updateStatusPaymentService = async (body: Payload) => {
  try {
    const { id, status } = body;

    const payment = await prisma.payment.findFirst({
      where: { id },
      include: { user: true },
    });

    if (!payment) {
      throw new Error('Payment not found');
    }

    return await prisma.$transaction(async (prisma) => {
      const updatedPayment = await prisma.payment.update({
        where: { id },
        data: { status },
      });

      if (status === 'REJECTED') {
        await prisma.event.update({
          where: { id: payment.eventId },
          data: { availableSeat: { increment: payment.qty } },
        });
      }

      await transporter.sendMail({
        to: payment.user.email,
        subject: 'Payment Status',
        html: `<h1>Your Payment Status has been updated</h1><p>Payment id: ${payment.id}</p><p>New Status: ${status}</p>`,
      });

      return updatedPayment;
    });
  } catch (error) {
    throw error;
  }
};
