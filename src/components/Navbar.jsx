import { Link, NavLink } from "react-router-dom";
import { Heart, Moon, Sun, UsersRound } from "lucide-react";
import Button from "./Button.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/users", label: "Users" },
  { to: "/about", label: "About" }
];

export default function Navbar({ favoritesCount, darkMode, onToggleTheme }) {
  const navClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? "bg-indigo-50 text-indigo-700 underline decoration-2 underline-offset-4 dark:bg-slate-800 dark:text-indigo-300"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-black tracking-tight text-slate-950 dark:text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white">
            <UsersRound size={19} />
          </span>
          Team Directory
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-1">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-2 text-xs font-bold text-rose-700 dark:bg-rose-950/50 dark:text-rose-300">
            <Heart size={14} fill="currentColor" /> Favorites: {favoritesCount}
          </span>
          <Button
            variant="secondary"
            onClick={onToggleTheme}
            className="!px-3"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            <span className="hidden sm:inline">{darkMode ? "Light" : "Dark"}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}