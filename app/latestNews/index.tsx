import { NewsCard } from "@/components/NewsCard";
import { NewsArticle } from "@/components/type/news";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function LatestNews() {
  try {
   

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=&sortBy=publishedAt&apiKey=02b8f941fee140bc81474aeb66bb939e`
    );

    // Log response status for debugging
    console.log("Response Status:", response.status);
    if (!response.ok) {
      const errorText = await response.text(); // Log the response text in case of an error
      console.error("Error response from API:", errorText);
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    const news = Array.isArray(data.articles) ? data.articles : [];

    return (
      <div className="flex flex-col items-center w-screen justify-between p-16 gap-8">
        <h1 className="text-5xl font-semibold">Latest News</h1>

        {news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(0, 9).map((item: NewsArticle) => (
              <NewsCard key={item.url} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No news available at the moment.</p>
        )}

        <Link href="/ai">
          <Button className="cursor-pointer">Explore More</Button>
        </Link>
      </div>
    );
  } catch (error) {
    console.error("Fetch Error:", error);
    return (
      <div className="flex flex-col items-center justify-center p-16 gap-4">
        <p className="text-red-500 text-lg">Error loading news. Please try again later.</p>
      </div>
    );
  }
}
