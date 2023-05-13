import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Users() {
  const users = await prisma.user.findMany();
  return (
    <div>
      People
      {users.map((user, i) => (
        <Link key={i} href={"/users/" + user.id}>
          <div>{user.name}</div>
        </Link>
      ))}
    </div>
  );
}
