// hooks/useNavigateToArticle.ts
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Article } from 'utils/types';
import { RootStackParamList } from 'utils/types'; // あなたのRootStackParamListのインポートパスに合わせてください。;

export const useNavigateToArticle = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Article'>>();
  return (article: Article) => {
    navigation.navigate('Article', {
      article,
    });
  };
};
