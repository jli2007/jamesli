import Link from "next/link";

export default function NotFound() {
  return (
    <div className="lg:max-h-screen min-h-screen lg:overflow-y-scroll overflow-auto overflow-x-hidden">
      <div className="w-full flex items-center justify-center px-6 pb-6 min-h-[80vh]">
        <div className="flex flex-col items-center justify-center gap-4 text-lighterBeige text-center">
          <h1 className="text-7xl md:text-9xl font-light tracking-tight">404</h1>
          <p className="text-base md:text-lg opacity-80">
            this page doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="mt-4 text-sm underline underline-offset-4 hover:opacity-70 transition"
          >
            back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
