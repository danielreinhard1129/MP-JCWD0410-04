import { forgotPasswordService } from '@/services/auth/forgotPassword.service';
import { loginService } from '@/services/auth/login.service';
import { registerService } from '@/services/auth/register.service';
import { resetPasswordService } from '@/services/auth/resetPassword.service';
import { NextFunction, Request, Response } from 'express';

export class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await loginService(req.body);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await registerService(req.body);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await forgotPasswordService(req.body.email);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await resetPasswordService(
        Number(res.locals.user.id),
        req.body.password,
      );
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
