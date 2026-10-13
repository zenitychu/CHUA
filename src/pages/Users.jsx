import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import usersData from "../data/users.js";
import UserCard from "../components/UserCard.jsx";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import Button from "../components/Button.jsx";

export default function Users({ favorites, onToggleFavorite }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Requirement: load local users after a one-second simulated delay.
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setUsers(usersData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const filteredUsers = useMemo(
    () => users.filter((user) => user.name.toLowerCase().includes(search.trim().toLowerCase())),
    [users, search]
  );

  useEffect(() => {
    document.title = `Users (${filteredUsers.length}) | Team Directory`;
  }, [filteredUsers.length]);

  return (
    <section>
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">The people</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white">Team members</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Search profiles and save your favorites.</p>
        </div>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
          {loading ? "Loading directory..." : `${filteredUsers.length} of ${users.length} members`}
        </p>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <label className="relative block flex-1">
          <Search size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name..."
            aria-label="Search users by name"
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-950"
          />
        </label>
        {search && (
          <Button variant="secondary" onClick={() => setSearch("")}>
            <X size={16} /> Clear search
          </Button>
        )}
      </div>

      {loading ? (
        <Loader />
      ) : filteredUsers.length === 0 ? (
        <div className="mt-7">
          <ErrorMessage title="No users found." message="No names match your search. Try a different name." />
        </div>
      ) : (
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              {...user}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={() => onToggleFavorite(user.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}