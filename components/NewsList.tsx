"use client";
import { useEffect, useState } from "react";
import { NewsArticle } from "./type/news";
import { fetchNews } from "@/lib/fetchNews";
import { SearchBar } from "./SearchBar";
import { CategoryFilter } from "./CategoryFilter";
import { NewsCard } from "./NewsCard";

export const NewsList = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const data = await fetchNews(category, search);
      console.log("🔹 News Data:", data); // Debugging
      setNews(data || []);
      setLoading(false);
    };

    getNews();
  }, [category, search]);

  return (
    <div className="w-screen p-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-x-12 lg:gap-x-16 mb-5">
        <SearchBar onSearch={setSearch} />
        <CategoryFilter onCategoryChange={setCategory} />
      </div>

      {loading ? (
        <p>Loading news...</p>
      ) : news.length === 0 ? (
        <p>No news available. Try a different search.</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {news.map((item: NewsArticle) => (
            <NewsCard key={item?.url} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
