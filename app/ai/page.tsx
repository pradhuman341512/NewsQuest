import { NewsList } from "@/components/NewsList";

// Correct for `app/ai/page.js`
export default function AiPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-y-2 ">
      <h2 className="text-2xl font-bold mb-10 mt-10">Latest News</h2>

      <div className="grid w-full  grid-cols-1 md:grid-cols-3 justify-between items-center">
      <NewsList/>
      </div>
    </section>
  );
}


