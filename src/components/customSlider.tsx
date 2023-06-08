import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  Text,
} from 'react-native';

interface SliderProps {
  images: any;
}

export const CustomSlider: React.FC<SliderProps> = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(images);

  const handleSlide = (event: any) => {
    const {contentOffset} = event.nativeEvent;
    const index = Math.floor(contentOffset.x / windowWidth);
    setCurrentIndex(index);
  };

  const indicatorWidth = new Animated.Value(0);

  const animateIndicator = () => {
    Animated.timing(indicatorWidth, {
      toValue: currentIndex,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const renderImages = () => {
    return images !== undefined ? (
      images.map((image: any, index: any) => (
        <Image
          key={index}
          source={{uri: `https://develop.yeshtery.com/files/${image.url}`}}
          style={styles.image}
        />
      ))
    ) : (
      <Text style={{color: '#000'}}>There is no images to show! </Text>
    );
  };

  const renderIndicator = () => {
    if (images === undefined) {
      return;
    }

    const indicatorStyles = [
      styles.indicator,
      {
        width: indicatorWidth.interpolate({
          inputRange: [0, images.length - 1],
          outputRange: ['0%', '100%'],
        }),
      },
    ];

    return <Animated.View style={indicatorStyles} />;
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: indicatorWidth}}}],
          {
            listener: handleSlide,
            useNativeDriver: false,
          },
        )}
        onMomentumScrollEnd={animateIndicator}>
        {images !== undefined ? (
          images.map((image: any, index: any) => (
            <Image
              key={index}
              source={{uri: `https://develop.yeshtery.com/files/${image.url}`}}
              style={styles.image}
            />
          ))
        ) : (
          <Text style={{color: '#000'}}>There is no images to show! </Text>
        )}
      </Animated.ScrollView>
      {renderIndicator()}
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: windowWidth,
    height: '100%',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 3,
    backgroundColor: 'blue',
  },
});
