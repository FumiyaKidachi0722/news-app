import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import { ListItem } from 'components/ListItem';
import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet } from 'react-native';

interface Article {
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

type RootStackParamList = {
  Home?: undefined;
  Article?: {
    article: Article;
  };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  /**
   * 記事データを管理するState
   */
  const [articles, setArticles] = useState<Article[] | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      /**
       * APIキーの取得
       */
      const apiKey = Constants.expoConfig?.extra?.newsApiKey;
      console.log('APIキー: ', apiKey);

      if (!apiKey) return Alert.alert('APIキーが設定されていません');

      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${apiKey}`,
        );
        console.log('記事の取得に成功しました');
        setArticles(response.data.articles);
      } catch (error) {
        console.error(`記事の取得に失敗しました: ${error}`);
        Alert.alert('記事の取得に失敗しました');

        Alert.alert('記事の取得に失敗しました');
      }
    };
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() =>
              navigation.navigate('Article', {
                article: item,
              })
            }
          />
        )}
        keyExtractor={(item) => item.publishedAt}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
