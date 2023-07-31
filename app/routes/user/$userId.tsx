import type { ActionFunction } from "@remix-run/node";
import { deleteUser } from "~/server/deleteUser";

export const action: ActionFunction = async ({ request, params }) => {
  try {
    const userId = params.userId;
    const method = request.method;
    switch (method) {
      case "DELETE": {
        return await deleteUser(request, userId);
      }
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
