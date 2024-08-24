import { updateProfileService } from "@/services/profile/updateProfile.service";
import { updatePFPService } from "@/services/profile/updateProfilePicture.service";
import { NextFunction, Request, Response } from "express";

export class ProfileController {
  async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await updateProfileService(
        req.body,
        Number(res.locals.user.id),
      );
  
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async updateProfilePicture(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await updatePFPService(
        req.file!,
        Number(res.locals.user.id),
      );
  
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}