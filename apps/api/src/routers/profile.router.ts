import { ProfileController } from '@/controllers/profile.controller';
import { uploader } from '@/lib/multer';
import { verifyToken } from '@/lib/verifyToken';
import { Router } from 'express';

export class ProfileRouter {
  private router: Router;
  private profileController: ProfileController;

  constructor() {
    this.profileController = new ProfileController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.patch(
      '/update',
      verifyToken,
      this.profileController.updateProfile,
    );
    this.router.patch(
      '/update-picture',
      verifyToken,
      uploader().single('pfp'),
      this.profileController.updateProfilePicture,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
