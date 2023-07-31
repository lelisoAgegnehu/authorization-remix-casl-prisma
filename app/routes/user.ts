import type { LoaderFunction } from "@remix-run/node";
import { getUsers } from "~/server/getUsers";

export const loader: LoaderFunction = async ({ request, params }) => {
  try {
    return await getUsers(request);
  } catch (error) {
    console.log(error);
    return error;
  }
};
