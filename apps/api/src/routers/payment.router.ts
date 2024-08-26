import { PaymentUserController } from '@/controllers/payment-user.controller';
import { uploader } from '@/lib/multer';
import { verifyToken } from '@/lib/verifyToken';
import { Router } from 'express';

export class PaymentUserRouter {
  private router: Router;
  private paymentUserController: PaymentUserController;

  constructor() {
    this.paymentUserController = new PaymentUserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      '/',
      verifyToken,
      this.paymentUserController.getPayments,
    );
    this.router.get('/:id', this.paymentUserController.getPayment);
    this.router.post(
      '/',
      verifyToken,
      this.paymentUserController.createPayment,
    );
    this.router.patch(
      '/:id',
      verifyToken,
      uploader().single('paymentProof'),
      this.paymentUserController.updatePayment,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
