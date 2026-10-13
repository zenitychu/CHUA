import { Link } from "react-router-dom";
import { ArrowRight, Heart, Search, ShieldCheck, UsersRound } from "lucide-react";
import Button from "../components/Button.jsx";

export default function Home() {
  const features = [
    { icon: Search, title: "Quick search", text: "Find a teammate by typing their name." },
    { icon: Heart, title: "Your favorites", text: "Save people you want to find again quickly." },
    { icon: ShieldCheck, title: "Simple profiles", text: "Open a profile to see the member's details." }
  ];

  return (
    <div className="space-y-12">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 px-6 py-12 text-white shadow-xl sm:px-10 sm:py-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
            <UsersRound size={14} /> Meet the people behind the work
          </span>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Good teams start with knowing each other.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-indigo-100">
            Find team members, learn what they do, and save your favorite profiles in one simple directory.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/users">
              <Button className="bg-white !text-indigo-700 hover:!bg-indigo-50">
                Explore the team <ArrowRight size={17} />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" className="!text-white hover:!bg-white/10">
                About this project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">Made for easy discovery</p>
          <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">Everything you need, in one place</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                <Icon size={21} />
              </span>
              <h3 className="mt-4 font-bold text-slate-950 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}