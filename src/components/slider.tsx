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
        dotsLength={4}
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
        data={images}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousel: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: screenWidth,
    height: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 8,
    paddingBottom: 16,
    alignSelf: 'center',
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
