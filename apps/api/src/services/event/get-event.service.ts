import prisma from '../../prisma';

export const getEventService = async (id: number) => {
  console.log(`getEventService called with id: ${id}`);
  try {
    console.log('Querying database for event');
    const event = await prisma.event.findFirst({
      where: { id, isDeleted: false },
      include: {
        user: {
          select: {
            username: true,
          }
        }
      },
    });

    if (!event) {
      console.log('Event not found');
      throw new Error('Event not found');
    }

    console.log('Event found:', event);
    return event;
  } catch (error) {
    console.error('Error in getEventService:', error);
    throw error;
  }
};