import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  //Get the details concerning the current session for the user
  //all ran on the server
  const session = await getServerSession(authOptions);

  //Directs user back to sign in if they are not logged in
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Some stuff idk
    </main>
  );
}
