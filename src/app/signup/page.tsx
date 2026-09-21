import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { signUp } from "@/app/actions";

export default function SignUpPage() {
  return (
    <div className="animate-fade-up mx-auto max-w-md space-y-6">
      <div className="space-y-2">
        <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">
          Sign up
        </h1>
        <p className="text-sm text-[var(--muted)]">
          Create an account with your email and password. After signing up,
          check your email for a confirmation link, then log in with the same
          password.
        </p>
      </div>
      <AuthForm action={signUp} submitLabel="Create account" />
      <p className="text-sm text-[var(--muted)]">
        Already have an account?{" "}
        <Link href="/login" className="text-[var(--accent)] underline-offset-2 hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
