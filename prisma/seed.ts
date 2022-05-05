import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const seed = async () => {
  // add your seeding here!
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db?.$disconnect();
  });

export default seed;
