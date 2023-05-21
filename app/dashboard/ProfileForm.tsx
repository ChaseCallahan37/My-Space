"use client";

import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface Props {
  user: User;
}

export default function ProfileForm({ user }: Props) {
  //Implements a server action here, this will be called on the server when the form on the client is submitted
  const updateUser = async (formData: FormData) => {
    "use server";
    const body = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    };

    await prisma.user.update({ where: { id: user.id }, data: body });

    //Revalidates the dashboard page, so that the new data is fetched from the server
    //If you add a loading ui here, then it will be automatically ran when the form is submitted
    //and while the data is being revalidated
    revalidatePath("/dashboard");
  };

  //Implements a server action here, this will be called on the server when the form on the client is submitted
  const updateUserAndRoute = async (formData: FormData) => {
    "use server";
    const body = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    };
    await prisma.user.update({ where: { id: user.id }, data: body });
    redirect("/");
  };

  return (
    <div>
      <form action={updateUser}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={user?.name ?? ""}
        />
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          id="email"
          defaultValue={user?.email ?? ""}
        />
        <button type="submit">Save</button>
        <button formAction={updateUserAndRoute}>Save and go to home</button>
      </form>
    </div>
  );
}
