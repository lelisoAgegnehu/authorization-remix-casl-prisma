import { accessibleBy } from "~/utils/casl/ability";
import { prisma } from "~/utils/prisma.server";

export const fetchUsers = async (ability) => {
  return await prisma.user.findMany({
    where: {
      AND: ability ? [accessibleBy(ability).User] : {},
    },
    include: {
      role: {
        include: {
          permissons: true,
        },
      },
    },
  });
};
