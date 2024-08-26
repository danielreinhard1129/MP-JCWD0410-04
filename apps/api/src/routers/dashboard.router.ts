import { DashboardController } from '@/controllers/dashboard.controller';
import { verifyToken } from '@/lib/verifyToken';
import { Router } from 'express';

export class DashboardRouter {
  private router: Router;
  private dashboardController: DashboardController;

  constructor() {
    this.dashboardController = new DashboardController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(
      '/events/:id',
      verifyToken,
      this.dashboardController.getEvent,
    );
    this.router.get(
      '/payments/:id',
      verifyToken,
      this.dashboardController.getPaymentDashboard,
    ),
      this.router.patch(
        '/payments/:id',
        verifyToken,
        this.dashboardController.updateStatusPaymentDashboard,
      );
  }

  getRouter(): Router {
    return this.router;
  }
}
