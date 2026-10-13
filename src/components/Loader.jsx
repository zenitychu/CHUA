export default function Loader({ message = "Loading users..." }) {
  return (
    <div role="status" className="flex min-h-52 flex-col items-center justify-center gap-4 text-slate-600 dark:text-slate-300">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
      <p className="font-semibold">{message}</p>
    </div>
  );
}