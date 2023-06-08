import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type IProps = {
  title: string;
  handlePress?: () => void;
};

export function Navbar(props: IProps) {
  const windowWidth = useWindowDimensions().width;
  const nav = useNavigation();
  return (
    <View>
      <ImageBackground source={IMAGES.BACKGROUND} resizeMode="cover">
        <View style={styles.container}>
          <TouchableOpacity onPress={props.handlePress} style={styles.leftSide}>
            <Image source={IMAGES.ARROW_BACK} style={styles.arrowBack} />
            <Text style={styles.navTitle}> {props.title}</Text>
          </TouchableOpacity>
          <View>
            <Image source={IMAGES.CART} style={styles.cart} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowBack: {
    width: 15,
    height: 20,
    marginEnd: 8,
  },
  cart: {
    width: 15,
    height: 20,
    marginRight: 30,
  },
  navTitle: {
    fontSize: 18,
    color: '#fff',
  },
  leftSide: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSide: {
    fontSize: 18,
    color: '#fff',
  },
});
