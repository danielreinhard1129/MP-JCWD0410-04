import { createPaymentService } from '@/services/payment/create-payment.service';
import { getPaymentsUserService } from '@/services/payment/get-payments-user.service';
// import { getTransactionService } from '@/services/transaction/get-transaction.service';
// import { getTransactionsUserService } from '@/services/transaction/get-transactions-user.service';
// import { updateTransactionService } from '@/services/transaction/update-transaction.service';
import { NextFunction, Request, Response } from 'express';

export class PaymentUserController {
  async getPayments(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getPaymentsUserService(
        Number(res.locals.user.id),
      );
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
//   async getTransaction(req: Request, res: Response, next: NextFunction) {
//     try {
//       const result = await getTransactionService(Number(req.params.id));
//       res.status(200).send(result);
//     } catch (error) {
//       next(error);
//     }
//   }
  async createPayment(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await createPaymentService(
        req.body,
        Number(res.locals.user.id),
      );
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
//   async updateTransaction(req: Request, res: Response, next: NextFunction) {
//     try {
//       const result = await updateTransactionService(
//         Number(req.params.id),
//         req.body,
//         req.file!,
//       );
//       res.status(200).send(result);
//     } catch (error) {
//       next(error);
//     }
//   }
}