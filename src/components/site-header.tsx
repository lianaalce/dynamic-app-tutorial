import Link from "next/link";
import { signOut } from "@/app/actions";
import { createClient } from "@/lib/supabase/server";

export async function SiteHeader() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const email = data?.claims?.email as string | undefined;

  return (
    <header className="border-b border-[var(--line)] bg-[var(--paper)]/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--ink)]">
          Verse
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          {email ? (
            <>
              <span className="hidden text-[var(--muted)] sm:inline">{email}</span>
              <Link
                href="/post"
                className="rounded-md bg-[var(--ink)] px-3 py-1.5 text-[var(--paper)] transition hover:opacity-90"
              >
                Post poem
              </Link>
              <form action={signOut}>
                <button
                  type="submit"
                  className="rounded-md border border-[var(--line)] px-3 py-1.5 text-[var(--ink)] transition hover:bg-[var(--wash)]"
                >
                  Log out
                </button>
              </form>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-md border border-[var(--line)] px-3 py-1.5 text-[var(--ink)] transition hover:bg-[var(--wash)]"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="rounded-md bg-[var(--ink)] px-3 py-1.5 text-[var(--paper)] transition hover:opacity-90"
              >
                Sign up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
