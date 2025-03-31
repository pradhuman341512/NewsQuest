export const fetchNews = async (category: string = "", search: string = "") => {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search || "tesla"}&from=2025-02-28&sortBy=publishedAt&apiKey=02b8f941fee140bc81474aeb66bb939e${category ? `&category=${category}` : ""}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.status}`);
    }

    const data = await response.json();
    return data.articles;  // ✅ Return articles only
  } catch (error) {
    console.error("Error fetching news data:", error);
    return [];  // ✅ Return empty array on error
  }
};
