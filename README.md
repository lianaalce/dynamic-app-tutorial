# Verse

A simple poetry sharing app built with Next.js, Tailwind CSS, and Supabase.

## Local development

1. Install dependencies: `npm install`
2. Env vars are in `.env.local` (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`)
3. Run: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Deploying to Vercel

1. Import this project in Vercel
2. Add the same two `NEXT_PUBLIC_SUPABASE_*` environment variables
3. Deploy (do not forget to add your Vercel URL to Supabase Auth redirect URLs when you go live)

Email confirmation stays on: after sign-up, users confirm via the email link, then log in with the same password.
