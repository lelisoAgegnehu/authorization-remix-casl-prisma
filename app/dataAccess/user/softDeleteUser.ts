import type { PureAbility } from "@casl/ability";
import { prisma } from "~/utils/prisma.server";

export const softDeleteUser = async (
  userId: string,
  ability: PureAbility<any, never>
) => {
  return await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      deletedAt: new Date(),
    },
  });
};
