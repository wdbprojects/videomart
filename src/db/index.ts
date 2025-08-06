import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "@/db/schema";

export const db = drizzle(process.env.DATABASE_URL!);

const main = async () => {
  /* //INFO: CREATE USER */
  const user: typeof usersTable.$inferInsert = {
    name: "Nata Slut",
    age: 30,
    email: "nata@slutty.com",
  };

  // await db.insert(usersTable).values(user);
  // console.log("New user created");

  /* //INFO: SELECT ALL USERS */
  const users = await db.select().from(usersTable);
  console.log("Getting all users from database: ", users);
};

main();
