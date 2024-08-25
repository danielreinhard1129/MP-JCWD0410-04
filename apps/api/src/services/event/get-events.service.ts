import { Prisma } from '@prisma/client';
import prisma from '../../prisma';

interface GetEventsService {
  page: number;
  take: number;
  sortBy: string;
  sortOrder: string;
  search: string;
  location?: string;
  category?: string;
}

export const getEventsService = async (query: GetEventsService) => {
  try {
    const { page, take, sortBy, sortOrder, search, location, category } = query;

    const whereClause: Prisma.EventWhereInput = {
      isDeleted: false,
    };

    // if (location) {
    //   whereClause.location = location;
    // }

    if (category) {
      whereClause.category = { category: category };
    }

    if (search) {
      whereClause.title = { contains: search };
    }

    const events = await prisma.event.findMany({
      where: whereClause,
      take: take,
      skip: (page - 1) * take,
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: {
        user: {
          select: {
            username: true,
          },
        },
        category: {
          // Include related category information
          select: {
            category: true,
          },
        },
      },
    });

    const total = await prisma.event.count({
      where: whereClause,
    });

    return {
      data: events,
      meta: { total, take, page },
    };
  } catch (error) {
    throw error;
  }
};
