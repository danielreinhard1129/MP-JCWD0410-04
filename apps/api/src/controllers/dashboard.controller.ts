import { getEventDashboardService } from '@/services/dashboard/getEventDashboard.service';
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
}
