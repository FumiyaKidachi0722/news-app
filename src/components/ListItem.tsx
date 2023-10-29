import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

interface News {
  imageUrl: string;
  title: string;
  author: string;
  onPress: () => void;
}

export const ListItem = (props: News) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={props.onPress}>
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={{ uri: props.imageUrl }} />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {props.title}
        </Text>
        <Text style={styles.subText}>{props.author}</Text>
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
