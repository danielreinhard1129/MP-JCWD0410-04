import { getReviewsService } from '@/services/review/get-review.service';
import { NextFunction, Request, Response } from 'express';

export class ReviewController {
  async getReviews(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getReviewsService();
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}

export default ReviewController;
