import { createPrismaAbility } from "@casl/prisma";

export interface RawRule {
  action: string | string[];
  subject: string | string[];
  /** an array of fields to which user has (or not) access */
  fields?: string[];
  /** an object of conditions which restricts the rule scope */
  conditions?: any;
  /** indicates whether rule allows or forbids something */
  inverted?: boolean;
  /** message which explains why rule is forbidden */
  reason?: string;
}
// const ability = (rules: RawRule[]) =>
//   createPrismaAbility([
//     {
//       action: "read",
//       subject: "Post",
//     },
//     {
//       action: "delete",
//       subject: "Post",
//     },
//   ]);

// console.log(222, ability);
// export default ability;
export default createPrismaAbility([
  {
    action: "manage",
    subject: "all",
  },
  {
    action: "delete",
    subject: "User",
  },
]);
