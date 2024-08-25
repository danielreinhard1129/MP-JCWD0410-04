import { JWT_SECRET } from '@/config';
import { cloudinaryUpload } from '@/lib/cloudinary';
import prisma from '@/prisma';
import { sign } from 'jsonwebtoken';

export const updatePFPService = async (
  file: Express.Multer.File,
  userId: number,
) => {
  try {
    const { secure_url } = await cloudinaryUpload(file);

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { pfp: secure_url },
    });

    const token = sign(
      { role: updatedUser.role, id: updatedUser.id },
      JWT_SECRET!,
      {
        expiresIn: '2h',
      },
    );

    const { password: pass, ...userWithoutPassword } = updatedUser;

    return { ...userWithoutPassword, token };
  } catch (error) {
    throw error;
  }
};
