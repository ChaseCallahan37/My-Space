"use client";

import { User } from "@prisma/client";

interface Props {
  user: User;
}

export default function ProfileForm({ user }: Props) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    };

    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <form onSubmit={updateUser}>
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
      </form>
    </div>
  );
}
