import { cloudinaryUpload } from '@/lib/cloudinary';
// import { transporter } from '@/lib/nodemailer';
import prisma from '@/prisma';
import { Payment_Status } from '@prisma/client';

interface UpdatePaymentBody {
  status: Payment_Status;
}

export const paymentProof = async (
  paymentId: number,
  body: UpdatePaymentBody,
  file: Express.Multer.File,
) => {
  try {
    const { status } = body;

    const payment = await prisma.payment.findFirst({
      where: { id: paymentId },
    });

    if (!payment) {
      throw new Error('Invalid payment ID');
    }

    const { secure_url } = await cloudinaryUpload(file);

    await prisma.payment.update({
      where: { id: paymentId },
      data: {
        status,
        paymentProof: secure_url,
      },
    });
    return "success"
  } catch (error) {
    throw error;
  }
};
// TODO: send email
// transaction.user.email
// await transporter.sendMail({
//   to: payment.user.email,
//   subject: '[TixStation] Payment Proof Successfully Uploaded',
//   html: `
//     <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
//         <h2 style="color: #56298d;">Your Payment Proof Has Been Submitted</h2>
//         <p>Dear ${payment.user.username},</p>
//         <p>Thank you for submitting your payment proof. We’ve received it and our CEO is currently processing your transaction.</p>
//         <p><strong>Transaction Summary:</strong></p>
//         <ul>
//             <li><strong>Payment ID:</strong> ${payment.id}</li>
//             <li><strong>Amount:</strong> ${new Intl.NumberFormat('id-ID', {
//             style: 'currency',
//             currency: 'IDR',
//             minimumFractionDigits: 0,
//             maximumFractionDigits: 0,
//             }).format(payment.total)}</li>
//             <li><strong>Date:</strong> ${new Date(payment.updatedAt).toLocaleDateString()}</li>
//         </ul>
//         <p>We will update you shortly once the payment verification is complete.</p>
//         <p>If you have any questions or need assistance, please reply to this email or reach out to our support team.</p>
//         <p>We appreciate your trust in Tixify!</p>
//         <p>Best regards,<br/>Tixify Support Team</p>
//     </div>
//   `,
// });
