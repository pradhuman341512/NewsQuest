// lib/fetchNews.ts

export const fetchNews = async (category: string = "", search: string = "") => {
  const MAX_RETRIES = 5;
  let attempts = 0;
  let data = null;

  while (attempts < MAX_RETRIES) {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search || "tesla"}&from=2025-03-15&sortBy=publishedAt&apiKey=02b8f941fee140bc81474aeb66bb939e`
      );
      
      if (response.status === 429) {
        console.log("Rate limit exceeded. Retrying...");
        attempts++;
        // Wait for exponential backoff
        const delay = Math.pow(2, attempts) * 1000; // Exponential backoff: 2^attempts * 1000ms
        await new Promise(resolve => setTimeout(resolve, delay));
        continue; // Retry the request
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.status}`);
      }

      data = await response.json();
      break; // If successful, break out of the loop
    } catch (error) {
      console.error("Error fetching news data", error);
      break;
    }
  }

  return data ? data.articles : []; // Ensure we return the articles array
};
