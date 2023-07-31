import { fetchUsers } from "~/dataAccess/user/fetchUsers";
import { userAbility } from "~/utils/userAbility";

export const getUsers = async (request) => {
  const ability = await userAbility("7ab1ff7d-e916-49ab-bc32-d2e897e62b7d");
  const users = await fetchUsers(ability);
  return users;
};
