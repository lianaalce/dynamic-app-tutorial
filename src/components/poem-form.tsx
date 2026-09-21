"use client";

import { useActionState } from "react";
import { createPoem, type AuthState } from "@/app/actions";

const initialState: AuthState = {};

export function PoemForm() {
  const [state, formAction, pending] = useActionState(createPoem, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5 text-sm">
        <span className="text-[var(--muted)]">Title</span>
        <input
          type="text"
          name="title"
          required
          maxLength={200}
          className="rounded-md border border-[var(--line)] bg-white px-3 py-2 text-[var(--ink)] outline-none ring-[var(--accent)] focus:ring-2"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-sm">
        <span className="text-[var(--muted)]">Poem</span>
        <textarea
          name="body"
          required
          rows={12}
          className="rounded-md border border-[var(--line)] bg-white px-3 py-2 font-[family-name:var(--font-display)] text-lg leading-relaxed text-[var(--ink)] outline-none ring-[var(--accent)] focus:ring-2"
        />
      </label>

      {state.error ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-800">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 rounded-md bg-[var(--ink)] px-4 py-2.5 text-sm font-medium text-[var(--paper)] transition hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Publishing…" : "Publish poem"}
      </button>
    </form>
  );
}
