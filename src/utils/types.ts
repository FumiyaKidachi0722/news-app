// src/utils/types.ts

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { rootReducer } from 'store';

export interface News {
  imageUrl: string;
  title: string;
  author: string;
  onPress: () => void;
}

export interface Article {
  author: string;
  content: string | null;
  description: string;
  publishedAt: string;
  source: {
    id: string | null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export type RootStackParamList = {
  Home: undefined;
  Article: { article: Article };
};

type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'Article'>;
type ArticleScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Article'
>;

export interface ArticleScreenProps {
  route: ArticleScreenRouteProp;
  navigation: ArticleScreenNavigationProp;
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export interface ClipScreenProps {
  navigation: HomeScreenNavigationProp;
}

// ルートステートの型定義
export type RootState = ReturnType<typeof rootReducer>;
