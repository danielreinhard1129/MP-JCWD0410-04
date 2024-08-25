import { AuthController } from '@/controllers/auth.controller';
import { verifyToken } from '@/lib/verifyToken';
import {
  validateEmail,
  validateLogin,
  validateRegister,
} from '@/validators/auth.validator';
import { Router } from 'express';

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/login', validateLogin, this.authController.login);
    this.router.post(
      '/register/credentials',
      validateRegister,
      this.authController.register,
    );
    this.router.post(
      '/forgot-password',
      validateEmail,
      this.authController.forgotPassword,
    );
    this.router.patch(
      '/reset-password',
      verifyToken,
      this.authController.resetPassword,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
