// src/hooks/useArticles.ts

import { useEffect, useState } from 'react';
import { fetchArticles } from 'services/newsService';
import { Article } from 'utils/types';

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await fetchArticles();
        setArticles(articles);
      } catch (error) {
        console.error(`Failed to fetch articles: ${error}`);
      }
    };
    fetchData();
  }, []);

  return articles;
};
