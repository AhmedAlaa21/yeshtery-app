import {View, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';

const IMG_URL = 'https://develop.yeshtery.com/files/';

const {width, height} = Dimensions.get('screen');

export function SlideItem(props: any) {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `${IMG_URL}${props.item.url}`}}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width / 1.5,
    height: height / 4.0,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.8,
    borderColor: '#000',
    marginHorizontal: 20,
    borderRadius: 20,
  },
  image: {
    flex: 1,
    width: '100%',
  },
});
