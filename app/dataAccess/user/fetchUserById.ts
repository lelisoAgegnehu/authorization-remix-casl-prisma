import { accessibleBy } from "@casl/prisma";
import ability from "~/utils/canUser";
import { prisma } from "~/utils/prisma.server";

export const fetchUserById = async (userId: String) => {
  return await prisma.user.findFirst({
    where: accessibleBy(ability).User,
  });
};
