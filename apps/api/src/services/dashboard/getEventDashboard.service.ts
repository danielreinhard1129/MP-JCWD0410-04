import prisma from '../../prisma';

export const getEventDashboardService = async (id: number, userId: number) => {
  try {
    const event = await prisma.event.findFirst({
      where: { id, isDeleted: false }
    });

    if (!event) {
      throw new Error('Event not found');
    }

    if (event.userId !== userId) {
      throw new Error('User unauthorized')
    }

    return event;
  } catch (error) {
    throw error;
  }
};