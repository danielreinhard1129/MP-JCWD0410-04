import { hashPassword } from '@/lib/bcrypt';
import prisma from '@/prisma';
import { User } from '@prisma/client';
import { format } from 'date-fns';
import { customAlphabet, nanoid } from 'nanoid';

// const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);

export const registerService = async (body: User) => {
  try {
    const { username, email, password, role, referral } = body;

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      throw new Error('User already exist');
    }

    const referredUser = referral
      ? await prisma.user.findFirst({
          where: { referral },
          include: { point: true },
        })
      : null;

    if (!referredUser && referral) {
      throw new Error('Referral code invalid');
    }

    return await prisma.$transaction(async (prisma) => {
      const hashedPassword = await hashPassword(password!);

      const newUser = await prisma.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
          provider: 'CREDENTIALS',
          pfp: '',
          role,
          referral: nanoid(6),
        },
      });

      await prisma.point.create({
        data: {
          userId: newUser.id,
        },
      });

      if (referredUser) {
        const expDate = new Date(Date.now() + 7776000 * 1000);

        await prisma.point.update({
          where: { userId: referredUser.id },
          data: {
            total: referredUser.point?.total! + 10000,
            expDate,
          },
        });

        const reward = await prisma.reward.create({
          data: {
            code: 'TIX-' + nanoid(6),
            expDate,
            quota: 1,
            claimed: 1,
          },
        });

        await prisma.userReward.create({
          data: {
            rewardId: reward.id,
            userId: newUser.id,
          },
        });
      }

      const { password: newUserPassword, ...userWithoutPassword } = newUser;

      return {
        userWithoutPassword,
      };
    });
  } catch (error) {
    throw error;
  }
};
