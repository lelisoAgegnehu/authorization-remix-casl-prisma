import { softDeleteUser } from "~/dataAccess/user/softDeleteUser";
import { userAbility } from "~/utils/userAbility";

export const deleteUser = async (request, userId) => {
  const ability = await userAbility("9e18f7a9-c3fb-496a-acbd-45c07b5b4ab4");
  ability.can("deletse", "User");
  const users = await softDeleteUser(userId, ability);
  return users;
};
