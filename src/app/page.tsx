import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link href="/producer-landing-page">Go to producers landing page</Link>
        <Link href="/why-choose-us">Why Choose Us page</Link>
      </main>
    </div>
  );
}
