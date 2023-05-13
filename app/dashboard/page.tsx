import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProfileForm from "./ProfileForm";
import { User } from "@prisma/client";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const currentUserEmail = session?.user?.email!;
  const user = (await prisma.user.findUnique({
    where: { email: currentUserEmail },
  })) as User;

  return (
    <>
      <h1>SOme form</h1>
      <p>{user?.name}</p>
      <ProfileForm user={user} />
    </>
  );
}
