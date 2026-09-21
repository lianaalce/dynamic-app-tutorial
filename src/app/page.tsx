import { createClient } from "@/lib/supabase/server";

type Poem = {
  id: string;
  title: string;
  body: string;
  created_at: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function HomePage() {
  const supabase = await createClient();
  const { data: poems, error } = await supabase
    .from("poems")
    .select("id, title, body, created_at")
    .order("created_at", { ascending: false });

  return (
    <div className="animate-fade-up space-y-10">
      <section className="space-y-3">
        <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight text-purple-700 sm:text-5xl">
          Poems from everyone
        </h1>
        <p className="max-w-xl text-[var(--muted)]">
          Newest voices first. Sign up to share a poem of your own.
        </p>
      </section>

      {error ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-800">
          Could not load poems: {error.message}
        </p>
      ) : null}

      {!error && (!poems || poems.length === 0) ? (
        <p className="rounded-md border border-dashed border-[var(--line)] bg-[var(--wash)]/60 px-4 py-8 text-center text-[var(--muted)]">
          No poems yet. Be the first to post one.
        </p>
      ) : null}

      <ul className="space-y-8">
        {(poems as Poem[] | null)?.map((poem, index) => (
          <li
            key={poem.id}
            className="animate-fade-up border-t border-[var(--line)] pt-8"
            style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
          >
            <article className="space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
                  {poem.title}
                </h2>
                <time
                  dateTime={poem.created_at}
                  className="text-sm text-[var(--muted)]"
                >
                  {formatDate(poem.created_at)}
                </time>
              </div>
              <p className="whitespace-pre-wrap font-[family-name:var(--font-display)] text-lg leading-relaxed text-[var(--ink)]/90">
                {poem.body}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
