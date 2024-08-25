import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import cors from 'cors';
import { PORT } from './config';
import { SampleRouter } from './routers/sample.router';
import { AuthRouter } from './routers/auth.router';
import { EventRouter } from './routers/event.router';
import { PrismaClient } from '@prisma/client';
import { CategoryRouter } from './routers/category.router';
import { ReviewRouter } from './routers/review.router';

export default class App {
  private app: Express;
  private prisma: PrismaClient;

  constructor() {
    this.app = express();
    this.prisma = new PrismaClient();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private handleError(): void {
    // Not changed
  }

  private routes(): void {
    const sampleRouter = new SampleRouter();
    const authRouter = new AuthRouter();
    const eventRouter = new EventRouter();
    const categoryRouter = new CategoryRouter();
    const reviewRouter = new ReviewRouter();

    this.app.get('/api', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student API!`);
    });

    // Add the categories endpoint directly here

    this.app.use('/api/samples', sampleRouter.getRouter());
    this.app.use('/api/auth', authRouter.getRouter());
    this.app.use('/api/events', eventRouter.getRouter());
    this.app.use('/api/categories', categoryRouter.getRouter());
    this.app.use('/api/reviews', reviewRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
