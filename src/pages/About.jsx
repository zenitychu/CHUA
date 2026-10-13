import { Code2, Heart, Layers3 } from "lucide-react";

export default function About() {
  return (
    <section className="mx-auto max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">About</p>
      <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white">About the Team Directory</h1>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
        Team Directory is a simple single-page React application for browsing a sample team roster. It demonstrates reusable components, client-side routing, React state, and effects.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <Code2 className="text-indigo-600 dark:text-indigo-300" size={24} />
          <h2 className="mt-3 font-bold text-slate-950 dark:text-white">React</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">Reusable UI and state management.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <Layers3 className="text-indigo-600 dark:text-indigo-300" size={24} />
          <h2 className="mt-3 font-bold text-slate-950 dark:text-white">React Router</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">Navigate between pages without a full reload.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <Heart className="text-indigo-600 dark:text-indigo-300" size={24} />
          <h2 className="mt-3 font-bold text-slate-950 dark:text-white">Favorites</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">Keep a list of team members you like.</p>
        </div>
      </div>
      <p className="mt-8 rounded-2xl bg-indigo-50 p-5 text-sm leading-6 text-indigo-950 dark:bg-indigo-950/50 dark:text-indigo-100">
        This activity uses local sample data and does not send user information to an external API.
      </p>
    </section>
  );
}