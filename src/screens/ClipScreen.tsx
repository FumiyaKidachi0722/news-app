// src/screens/ClipScreen.tsx

import { ListItem } from 'components/molecules/ListItem';
import { useClips } from 'hooks/useClips';
import { useNavigateToArticle } from 'hooks/useNavigateToArticle';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ClipScreenProps } from 'utils/types';

/**
 * クリップ画面
 * @param navigation ナビゲーションプロップ
 */
export const ClipScreen: React.FC<ClipScreenProps> = () => {
  const clips = useClips(); // カスタムフックを使用
  const navigateToArticle = useNavigateToArticle();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
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
    backgroundColor: '#fff',
  },
});
