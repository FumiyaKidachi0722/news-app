// src/screens/HomeScreen.tsx

import { ListItem } from 'components/molecules/ListItem';
import { useArticles } from 'hooks/useArticles';
import { useNavigateToArticle } from 'hooks/useNavigateToArticle';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { HomeScreenProps } from 'utils/types';

/**
 * ホーム画面
 * @param navigation ナビゲーションプロップ
 */
export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const articles = useArticles();
  const navigateToArticle = useNavigateToArticle();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigateToArticle(item)}
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
