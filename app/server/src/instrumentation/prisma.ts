
// todo: replace with generated code
type PrismaClient = { $on: (event: string, handler: (event: any) => void) => void };

export function makePrismaLogSubscriber<Event>(event: string, handler: (event: Event) => void) {
    return (prisma: PrismaClient) => {
        prisma.$on(event, handler);
    }
};