import SignIn from "./components/signin";
import { auth } from "@/auth";
import SignOut from "./components/signout";

export default async function Home() {
  const session = await auth()

  console.log("auth123", session)
  return (
    <>
      <h1>{session?.user?.name}</h1>
      {
        session ? (
          <SignOut />

        ) : (
          <SignIn />

        )
      }
    </>
  );
}
