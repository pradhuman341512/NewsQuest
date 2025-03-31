 export interface NewsArticle {
    source: {
      id?: string;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string; // ISO 8601 format
    content: string;
  }
  