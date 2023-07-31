import { createPrismaAbility } from "@casl/prisma";
import { prisma } from "./prisma.server";

export const userAbility = async (userId: string) => {
  const ur = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      role: {
        select: {
          permissons: true,
        },
      },
    },
  });
  const permission = ur?.role.permissons.map((el) => {
    const filtered = Object.fromEntries(
      Object.entries(el).filter(([key, value]: any) => {
        if (
          (key.includes("action") && value) ||
          (key.includes("subject") && value) ||
          (key.includes("conditions") && value) ||
          (key.includes("fields") && value?.length)
        ) {
          return { key: value };
        }
      })
    );

    return filtered;
  }) as any;
  return createPrismaAbility(permission);
};
