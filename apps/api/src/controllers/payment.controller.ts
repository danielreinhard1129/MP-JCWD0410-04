// import { getPaymentService } from '@/services/payment/get-payment.service';
// import { NextFunction, Request, Response } from 'express';

// export class PaymentController {
//   async getPayment(req: Request, res: Response, next: NextFunction) {
//     try {
//       const paymentId = Number(req.params.id);
//       const result = await getPaymentService(paymentId);
//       res.status(200).json(result);
//     } catch (error) {
//       next(error);
//     }
//   }
// }
