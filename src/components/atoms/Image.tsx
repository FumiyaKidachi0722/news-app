import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface ImageProps {
  imageUrl: string;
}

/**
 * 画像を表示する
 * @param imageUrl 画像のURL
 */
export const AtomImage = ({ imageUrl }: ImageProps) => {
  return <Image style={styles.image} source={{ uri: imageUrl }} />;
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
