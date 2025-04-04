import { NewsArticle } from "@/components/type/news";
import Image from "next/image";

export const revalidate = 60;
export const dynamicParams = true;

// ✅ Generate static paths for dynamic routes
export async function generateStaticParams() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=02b8f941fee140bc81474aeb66bb939e`
  );
  const data = await res.json();

  if (!data.articles) return [];

  return data.articles.map((article: NewsArticle) => ({
    id: encodeURIComponent(article.url), // Encoding URL to make it a valid parameter
  }));
}

// ✅ Page Component
const NewsDetailspage = async ({ params }: { params: { id: string } }) => {
  if (!params?.id) {
    return <div>Error: Missing News ID!</div>;
  }

  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(params.id)}&apiKey=02b8f941fee140bc81474aeb66bb939e`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch news data");
    }

    const post = await res.json();
    const article: NewsArticle | undefined = post.articles?.[50];

    if (!article) {
      return <div>News Not Found!</div>;
    }

    return (
      <section className="  flex p-2 items-center justify-center">
  <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg flex flex-col gap-6">
    {/* ✅ Ensure Image `src` is valid */}
    {article?.urlToImage ? (
      <div>
        <Image
          src={article.urlToImage}
          alt={article.title || "News Image"}
          width={1000}
          height={450}
          className="rounded-md object-cover"
        />
      </div>
    ) : (
      <p className="text-gray-500">No image available</p>
    )}

    <h2 className="text-3xl font-bold">{article?.title} by: {article?.author}</h2>
    <p className="text-sm text-gray-500">
      Published on: {new Date(article?.publishedAt).toLocaleDateString()}
    </p>
    <p className="text-gray-700">{article?.description}</p>
    <p className="text-gray-700">{article?.content}</p>
  </article>
</section>

    );
  } catch (error) {
    return <div>Error fetching news: {}</div>;
  }
};

export default NewsDetailspage;
