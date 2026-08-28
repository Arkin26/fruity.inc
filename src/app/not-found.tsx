import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col justify-center px-6">
      <p className="text-sm text-white/60">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        Page not found
      </h1>
      <Link
        href="/"
        className="mt-6 text-sm text-white/70 underline-offset-4 hover:underline"
      >
        Back home
      </Link>
    </div>
  );
}
