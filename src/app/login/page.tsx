import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { signIn } from "@/app/actions";

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;

  return (
    <div className="animate-fade-up mx-auto max-w-md space-y-6">
      <div className="space-y-2">
        <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">
          Log in
        </h1>
        <p className="text-sm text-[var(--muted)]">
          Use the same email and password you signed up with. Confirm your email
          first if you have not already.
        </p>
      </div>

      {params.error ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-800">
          {params.error}
        </p>
      ) : null}

      <AuthForm action={signIn} submitLabel="Log in" />
      <p className="text-sm text-[var(--muted)]">
        New here?{" "}
        <Link href="/signup" className="text-[var(--accent)] underline-offset-2 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
