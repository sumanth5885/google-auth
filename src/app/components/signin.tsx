import { signIn } from "@/auth"

export default function SignIn() {
  return (
    <>
      <form
        action={async () => {
          "use server"
          await signIn("google", { redirectTo: "/" })
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/" });
        }}
      >
        <button type="submit">Sign in with GitHub</button>
      </form>
    </>
  )
}