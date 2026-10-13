import { Link } from "react-router-dom";
import { ArrowUpRight, BriefcaseBusiness, Building2, Heart, Mail } from "lucide-react";
import Button from "./Button.jsx";

export default function UserCard({
  id,
  name,
  email,
  company,
  role,
  isFavorite,
  onToggleFavorite
}) {
  const initials = name.split(" ").map((part) => part[0]).slice(0, 2).join("");

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-black text-white">
          {initials}
        </div>
        <Button
          variant="ghost"
          onClick={onToggleFavorite}
          className="!px-3 !py-2"
          aria-label={isFavorite ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
        >
          <Heart size={17} fill={isFavorite ? "currentColor" : "none"} className={isFavorite ? "text-rose-600" : ""} />
          <span>{isFavorite ? "Saved" : "Favorite"}</span>
        </Button>
      </div>

      <h2 className="mt-4 text-lg font-bold text-slate-950 dark:text-white">{name}</h2>
      <p className="mt-1 flex items-center gap-2 break-all text-sm text-slate-500 dark:text-slate-400">
        <Mail size={15} className="shrink-0" /> {email}
      </p>
      <p className="mt-4 flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
        <Building2 size={16} className="shrink-0 text-indigo-500" /> {company}
      </p>
      <p className="mt-2 flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
        <BriefcaseBusiness size={16} className="shrink-0 text-indigo-500" /> {role}
      </p>

      <div className="mt-auto pt-5">
        <Link
          to={`/users/${id}`}
          className="inline-flex items-center gap-1 text-sm font-bold text-indigo-700 hover:underline dark:text-indigo-300"
        >
          View Details <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}