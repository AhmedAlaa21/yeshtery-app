import {View, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../assets';

export function RewardOverlay() {
  const [visible, setVisible] = useState(true);

  const handleTouch = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <TouchableOpacity onPress={handleTouch}>
        <View style={styles.overlayContent}>
          <Image
            source={IMAGES.REWARD}
            style={styles.reward}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayContent: {
    padding: 16,
    borderRadius: 8,
  },
  reward: {
    height: 230,
    width: 289.11,
  },
});
