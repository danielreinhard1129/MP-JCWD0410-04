import { cloudinaryUpload } from '@/lib/cloudinary';
import prisma from '@/prisma';

export const updatePFPService = async (
  file: Express.Multer.File,
  userId: number,
) => {
  try {
    const { secure_url } = await cloudinaryUpload(file);

    return await prisma.user.update({
      where: {id: userId},
      data: {
        pfp: secure_url,
      },
    });
  } catch (error) {
    throw error;
  }
};
