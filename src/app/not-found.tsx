import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-lg mx-auto px-4">
        <h1 className="text-6xl font-heading font-bold text-primary">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Looks like this trail runs out here — but the dunes are still out there.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors cursor-pointer"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
