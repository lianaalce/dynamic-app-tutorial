import { redirect } from "next/navigation";
import { PoemForm } from "@/components/poem-form";
import { createClient } from "@/lib/supabase/server";

export default async function PostPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/login");
  }

  return (
    <div className="animate-fade-up mx-auto max-w-xl space-y-6">
      <div className="space-y-2">
        <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">
          Post a poem
        </h1>
        <p className="text-sm text-[var(--muted)]">
          Share a title and the full text. It will appear on the home page for
          everyone.
        </p>
      </div>
      <PoemForm />
    </div>
  );
}
