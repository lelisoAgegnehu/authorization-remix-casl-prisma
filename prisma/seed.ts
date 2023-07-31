import * as bcrypt from "bcrypt";
import { PrismaClient } from "./generated/client";

const prisma = new PrismaClient();
async function main() {
  await prisma.$connect();
  await prisma.user.create({
    data: {
      firstName: "Employee",
      lastName: "Cmo",
      role: {
        create: {
          name: "employee",
          permissons: {
            create: [
              {
                action: "create",
                subject: "User",
                name: "Create User",
                category: "User",
                description: "User with this permission can create user",
              },
              {
                action: "read",
                subject: "User",
                name: "Read User",
                category: "User",
                description: "User with this permission can read user",
              },
              {
                action: "delete",
                subject: "User",
                name: "Delete User",
                category: "User",
                description: "User with this permission can delete user",
              },
              {
                action: "update",
                subject: "User",
                name: "Update User",
                category: "User",
                description: "User with this permission can update user",
              },
            ],
          },
        },
      },
      gender: "MALE",
      email: "employe@cmo.com",
      password: bcrypt.hashSync("password", 10),
    },
  });
}
main()
  .catch((err) => {
    console.log(err);
  })
  .finally(async () => await prisma.$disconnect());
