import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const carouselData = [
  { id: 1, uri: 'https://w7.pngwing.com/pngs/114/579/png-transparent-pink-cross-stroke-ink-brush-pen-red-ink-brush-ink-leave-the-material-text.png' },
  { id: 2, uri: 'https://w7.pngwing.com/pngs/114/579/png-transparent-pink-cross-stroke-ink-brush-pen-red-ink-brush-ink-leave-the-material-text.png' },
  { id: 3, uri: 'https://w7.pngwing.com/pngs/114/579/png-transparent-pink-cross-stroke-ink-brush-pen-red-ink-brush-ink-leave-the-material-text.png' },
  { id: 4, uri: 'https://w7.pngwing.com/pngs/114/579/png-transparent-pink-cross-stroke-ink-brush-pen-red-ink-brush-ink-leave-the-material-text.png' },
];

export const SliderComponent = (images: {images: any}) => {
  return (
    <View style={styles.container}>
      <Carousel
        data={carouselData}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={item.image} style={styles.carouselImage} />
            <Text style={styles.carouselTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  carouselImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  carouselTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
});
