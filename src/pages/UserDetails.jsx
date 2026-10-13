import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BriefcaseBusiness, Building2, Mail, UserRound } from "lucide-react";
import usersData from "../data/users.js";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Requirement: find the user again whenever the URL ID changes.
  useEffect(() => {
    setLoading(true);
    const foundUser = usersData.find((item) => item.id === Number(id));
    setUser(foundUser || null);
    setLoading(false);
    document.title = foundUser ? `${foundUser.name} | Team Directory` : "User Not Found | Team Directory";
  }, [id]);

  if (loading) return <Loader message="Loading user details..." />;

  if (!user) {
    return (
      <div className="space-y-5">
        <ErrorMessage title="User not found." message={`There is no team member with ID ${id}.`} />
        <Link className="inline-flex items-center gap-2 font-semibold text-indigo-700 hover:underline dark:text-indigo-300" to="/users">
          <ArrowLeft size={17} /> Back to Users
        </Link>
      </div>
    );
  }

  const initials = user.name.split(" ").map((part) => part[0]).slice(0, 2).join("");

  return (
    <section className="mx-auto max-w-3xl">
      <Link to="/users" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700 hover:underline dark:text-indigo-300">
        <ArrowLeft size={17} /> Back to Users
      </Link>
      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="h-32 bg-gradient-to-r from-indigo-600 to-violet-600" />
        <div className="px-6 pb-8 sm:px-9">
          <div className="-mt-12 grid h-24 w-24 place-items-center rounded-3xl border-4 border-white bg-indigo-100 text-2xl font-black text-indigo-700 shadow-sm dark:border-slate-900 dark:bg-indigo-950 dark:text-indigo-200">
            {initials}
          </div>
          <p className="mt-5 text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">Team member profile</p>
          <h1 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">{user.name}</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">{user.role}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400"><Mail size={17} /> Email</div>
              <p className="mt-2 break-all font-semibold text-slate-900 dark:text-white">{user.email}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400"><Building2 size={17} /> Company</div>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">{user.company}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800 sm:col-span-2">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400"><BriefcaseBusiness size={17} /> Role</div>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}