import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from '../../utils/theme';

type IProps = {
  title: string;
  handlePress?: () => void;
};

const {sizes, colors} = theme;

export function Navbar(props: IProps) {
  return (
    <View>
      <Image style={styles.background} source={IMAGES.BACKGROUND} />
      <View style={styles.container}>
        <TouchableOpacity onPress={props.handlePress} style={styles.leftSide}>
          <Image source={IMAGES.ARROW_BACK} style={styles.arrowBack} />
          <Text style={styles.navTitle}> {props.title}</Text>
        </TouchableOpacity>
        <View>
          <Image source={IMAGES.CART}  style={styles.cart}/>
        </View >
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: colors.navbarBackground,
  },
  arrowBack: {
    width: 15,
    height: 20,
    marginEnd: 8,
  },
  cart: {
    position: 'absolute',
    width: 15,
    height: 20,
    zIndex: 999,
  },
  navTitle: {
    fontSize: sizes.medium,
    color: colors.white,
  },
  leftSide: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSide: {
    fontSize: sizes.medium,
    color: colors.white,
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    resizeMode: 'cover',
    zIndex: 10,
  },
});
