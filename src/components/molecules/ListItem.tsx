import { AtomImage } from 'components/atoms/Image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { News } from 'utils/types';

/**
 *
 * @param {
 * imageUrl: 画像URL
 * title: タイトル(string)
 * author: ニュース提供元(string)
 * onPress: タップされた時のイベント
 * } props
 * @returns
 */

export const ListItem = ({ imageUrl, title, author, onPress }: News) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        <AtomImage imageUrl={imageUrl} />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginVertical: 5,
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});
