import type { PureAbility } from "@casl/ability";
import { accessibleBy } from "~/utils/ability";
import { prisma } from "~/utils/prisma.server";

export const softDeleteUser = async (
  userId: string,
  ability: PureAbility<any, never>
) => {
  return await prisma.user.update({
    where: {
      id: userId,
      AND: [accessibleBy(ability).User],
    },
    data: {
      deletedAt: new Date(),
    },
  });
};
