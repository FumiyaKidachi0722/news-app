import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface ClipButtonProps {
  onPress: () => void;
  enabled: boolean;
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

export const ClipButton = ({ onPress, enabled }: ClipButtonProps) => {
  const name = enabled ? 'bookmark' : 'bookmark-o';
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome name={name} size={40} color="gray" />
    </TouchableOpacity>
  );
};
