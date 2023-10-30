// src/screens/ArticleScreen.tsx

import { ClipButton } from 'components/atoms/ClipButton';
import { useClip } from 'hooks/useClip';
import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { ArticleScreenProps } from 'utils/types';

/**
 * 記事詳細画面
 * @param route ルーティング情報
 */
export const ArticleScreen: React.FC<ArticleScreenProps> = ({ route }) => {
  const { article } = route.params;
  const { isCliped, toggleClip } = useClip(article);

  return (
    <>
      <ClipButton onPress={toggleClip} enabled={isCliped} />
      <WebView
        style={styles.container}
        source={{ uri: article.url }}
        startInLoadingState={true}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
