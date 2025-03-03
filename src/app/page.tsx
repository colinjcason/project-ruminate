import Box from "@/components/Box";
import { LightbulbIcon } from "@/components/icons";

export default function Home() {
  return (
    <div className="bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Box
          title="Customer Insights"
          body="Evaluators’ feedback represents not just their expertise but also their customers’ needs and preferences."
          cornerImage={<LightbulbIcon height="12.5rem" width="12.5rem" />}
        />
      </main>
    </div>
  );
}
