import { NextFunction, Request, Response } from 'express';
import { getCategoriesService } from '../services/category/get-categories.service';

export class CategoryController {
  async getCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getCategoriesService();
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

};

export default CategoryController;
``