import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getUsers } from "~/server/getUsers";
import { errorHandler } from "~/utils/response/errorHandler";
import { Response } from "~/utils/response/response";
import { validate } from "~/utils/response/validate";
import { userSchema } from "~/utils/schema/user";

export const loader: LoaderFunction = async ({ request, params }) => {
  try {
    const users = await getUsers(request);
    return json(Response({ data: users }), { status: 201 });
  } catch (error) {
    return errorHandler(error);
  }
};

export const action: ActionFunction = async (args) => {
  try {
    const formData = Object.fromEntries(await args.request.formData());
    const { data } = validate(formData, userSchema);
    return json(
      Response({ message: "User Successfully created !", data: data }),
      { status: 201 }
    );
  } catch (error) {
    return errorHandler(error);
  }
};
