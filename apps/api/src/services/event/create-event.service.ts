import { cloudinaryUpload } from '@/lib/cloudinary';
import prisma from '@/prisma';

interface CreateEventBody {
  title: string;
  desc: string;
  startDate: Date;
  endDate: Date;
  price: number;
  quota: number;
  img: string;
  location: string;
  availableSeat: number;
  categoryId: number;
  userId: number;
}

export const createEventService = async (
  body: CreateEventBody,
  file: Express.Multer.File,
  userId: number,
) => {
  try {
    const {
      title,
      desc,
      startDate,
      endDate,
      price,
      quota,
      img,
      location,
      categoryId,
      userId,
    } = body;

    console.log(body);

    const event = await prisma.event.findFirst({
      where: { title },
    });

    if (event) {
      throw new Error('Event already exist');
    }

    const { secure_url } = await cloudinaryUpload(file);

    return await prisma.event.create({
      data: {
        title,
        desc,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        price: Number(price),
        quota: Number(quota),
        img: secure_url,
        location,
        availableSeat: Number(quota),
        categoryId: Number(categoryId),
        userId: Number(userId),
      },
    });
  } catch (error) {
    throw error;
  }
};
