import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class EventCardController {
  async getEvents() {
    try {
      const events = await prisma.event.findMany({
        select: {
          title: true,
          date: true,
          desc: true,
          price: true,
        },
      });
      return events;
    } catch (error) {
      throw new Error('Error fetching events');
    }
  }
}
