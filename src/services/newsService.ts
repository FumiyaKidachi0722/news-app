// src/services/newsService.ts

import axios from 'axios';
import Constants from 'expo-constants';
import { Article } from 'utils/types';

export const fetchArticles = async (): Promise<Article[]> => {
  const apiKey = Constants.expoConfig?.extra?.newsApiKey;
  if (!apiKey) throw new Error('API key is not set');

  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${apiKey}`,
  );
  return response.data.articles;
};
