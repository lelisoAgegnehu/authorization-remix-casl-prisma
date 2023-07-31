import { accessibleBy } from "~/utils/ability";
import { prisma } from "~/utils/prisma.server";

export const softDeleteUser = async (userId: string, ability) => {
  return await prisma.user.update({
    where: {
      id: userId,
      AND: ability ? [accessibleBy(ability).User] : {},
    },
    data: {
      deletedAt: new Date(),
    },
  });
};
