import { AlertCircle } from "lucide-react";

export default function ErrorMessage({
  title = "No users found.",
  message = "Try another name or clear the search field."
}) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 px-6 py-12 text-center dark:border-slate-700">
      <AlertCircle size={32} className="text-slate-400" />
      <h3 className="mt-3 font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-1 max-w-md text-sm text-slate-500 dark:text-slate-400">{message}</p>
    </div>
  );
}