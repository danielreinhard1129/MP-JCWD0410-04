import { AuthController } from '@/controllers/auth.controller';
import { verifyToken } from '@/lib/verifyToken';
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
    this.router.post('/login', this.authController.login);
    this.router.post('register/credentials', this.authController.register)
    // this.router.patch(
    //   '/reset-password',
    //   verifyToken,
    //   this.authController.resetPassword,
    // );
  }

  getRouter(): Router {
    return this.router;
  }
}
