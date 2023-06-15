import React, {useState, useRef} from 'react';
import {View, Dimensions, StyleSheet, Image, Animated} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

interface ImageType {
  id: number;
  url: string;
}

interface Props {
  images: ImageType[];
}

const {width: screenWidth} = Dimensions.get('window');

export const SliderComponent: React.FC<Props> = ({images}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  let imageSlice = images.slice(0, 4);

  const renderItem = ({item}: {item: ImageType}) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={{uri: `https://develop.yeshtery.com/files/${item.url}`}}
        />
      </View>
    );
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={imageSlice.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        data={imageSlice}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 20}
        onSnapToItem={index => setActiveSlide(index)}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
      />
      {pagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
  },
  carousel: {
    borderColor: '#ccc',
    borderWidth: 1,
  },
  itemContainer: {
    width: screenWidth,
    height: screenWidth - 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 247,
    width: 341,
    resizeMode: 'cover',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: -10,
  },
  dotStyle: {
    width: 20,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007aff',
  },
  inactiveDotStyle: {
    backgroundColor: '#bcbcbc',
  },
});
