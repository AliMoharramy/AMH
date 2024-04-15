import { getSession } from "next-auth/react";
import { login } from "../lib/data";
import { redirect } from "next/dist/server/api-utils";

export default async function LoginForm() {
  const session = await getSession;
  return (
    <div className="absolute right-56 top-16  text-white p-8 h-full">
      <form
        action={async (formData) => {
          "use server";
          await login(formData);
          redirect;
        }}
        className="text-center h-full"
      >
        <div className="flex flex-col gap-5 loginForm h-3/4 px-12 items-center justify-center">
          <h4 className="text-2xl">Login</h4>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="p-1 text-black my-4"
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="p-1 text-black"
          />
        </div>
        <button type="submit" className="loginForm w-full mt-4 py-2">
          Log In
        </button>
      </form>
    </div>
  );
}
