import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
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
    <View style={[{flex: 1}, styles.overlay]}>
      <TouchableOpacity
        onPress={handleTouch}>
        <View style={styles.overlayContent}>
          <Image source={IMAGES.REWARD} style={styles.reward} resizeMode='contain' />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayContent: {
    padding: 16,
    borderRadius: 8,
  },
  reward: {
    backgroundColor: 'transparent',
     height: 300,
  },
});
