'use client'
import { useEffect, useState } from "react"
import { NewsArticle } from "./type/news";
import {fetchNews}  from '@/lib/fetchNews'
export const NewsList = () => {
    const [news, setNews] = useState<NewsArticle[]>([]);
  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const getnews = async () => {
      const data = await fetchNews(category, search);
      setNews(data);
    };

    getnews();
  }, [category, search]);
  return (
    <div>NewsList</div>
  )
}
