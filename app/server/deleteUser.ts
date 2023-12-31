import { subject } from "@casl/ability";
import { softDeleteUser } from "~/dataAccess/user/softDeleteUser";
import { userAbility } from "~/utils/casl/userAbility";

export const deleteUser = async (request, userId) => {
  const ability = await userAbility("7ab1ff7d-e916-49ab-bc32-d2e897e62b7d");
  // console.log(ability.can("update", subject("User", { id: "rr" })));
  const users = await softDeleteUser(userId, ability);
  return users;
};
