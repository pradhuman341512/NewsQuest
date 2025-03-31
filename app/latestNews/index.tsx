import { NewsCard } from "@/components/NewsCard";
import { NewsArticle } from "@/components/type/news";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function LatestNews() {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2025-02-28&sortBy=publishedAt&apiKey=02b8f941fee140bc81474aeb66bb939e`);
    const data = await response.json();

   
    const news = Array.isArray(data.articles) ? data.articles : [];

    return (
      <div className="flex flex-col md items-center justify-between p-16 gap-8">
        <h1 className="text-5xl font-semibold">Latest News</h1>
        <div className="grid  grid-cols-1 grid-rows-3 md:grid-cols-3 lg:grid-cols-3 md:flex-row gap-6 overflow-hidden">
          {news.slice(0, 9).map((item: NewsArticle) => (
            <NewsCard key={item.url} item={item} />
          ))}
        </div>
          <Link href='/ai' >
          <Button className="cursor-pointer">Explore More</Button>
          </Link>
      </div>
    );
  } catch (error) {
    console.error('Fetch Error:', error);
    return <p>Error loading news.</p>;
  }
}
