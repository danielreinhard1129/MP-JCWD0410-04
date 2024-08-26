import { getEventDashboardService } from '@/services/dashboard/getEventDashboard.service';
import { getPaymentDashboardService } from '@/services/dashboard/getPaymentDashboard.service';
import { updateStatusPaymentService } from '@/services/dashboard/updateStatusPayment.service';
import { NextFunction, Request, Response } from 'express';

export class DashboardController {
  async getEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getEventDashboardService(
        Number(req.params.id),
        Number(res.locals.user.id),
      );
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getPaymentDashboard(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getPaymentDashboardService(
        Number(req.params.id),
        Number(res.locals.user.id),
      );
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async updateStatusPaymentDashboard(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await updateStatusPaymentService(req.body);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
