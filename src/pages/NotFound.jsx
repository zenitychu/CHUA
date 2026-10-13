import { Link } from "react-router-dom";
import { ArrowLeft, MapPinned } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[55vh] flex-col items-center justify-center text-center">
      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
        <MapPinned size={30} />
      </span>
      <p className="mt-6 text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">Error 404</p>
      <h1 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">Page not found</h1>
      <p className="mt-3 max-w-md text-slate-600 dark:text-slate-400">Sorry, we couldn't find the page you were looking for.</p>
      <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-700">
        <ArrowLeft size={17} /> Back to Home
      </Link>
    </section>
  );
}