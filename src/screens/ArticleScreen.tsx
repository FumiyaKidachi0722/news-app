import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ClipButton } from 'components/atoms/ClipButton';
import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { addClip, deleteClip } from 'store/userSlice';

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
  Home: undefined;
  Article: { article: Article };
};

type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'Article'>;

type ArticleScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Article'
>;

interface ArticleScreenProps {
  route: ArticleScreenRouteProp;
  navigation: ArticleScreenNavigationProp;
}

export const ArticleScreen: React.FC<ArticleScreenProps> = ({ route }) => {
  const { article } = route.params;
  const dispatch = useDispatch();

  const clips = useSelector((state: RootState) => state.user.clips);

  const isCliped = clips.some((clip) => clip.url === article.url);

  const onPressClip = () => {
    if (isCliped) {
      dispatch(deleteClip(article));
    } else {
      dispatch(addClip(article));
    }
  };

  return (
    <>
      <ClipButton onPress={onPressClip} enabled={isCliped} />
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
