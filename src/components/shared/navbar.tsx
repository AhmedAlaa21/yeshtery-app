import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

type IProps = {
  title: string;
  handlePress?: () => void;
};

export function Navbar(props: IProps) {
  return (
    <View>
      <Image style={styles.background} source={IMAGES.BACKGROUND} />
      <View style={styles.container}>
        <TouchableOpacity onPress={props.handlePress} style={styles.leftSide}>
          <Image source={IMAGES.ARROW_BACK} style={styles.arrowBack} />
          <Text style={styles.navTitle}> {props.title}</Text>
        </TouchableOpacity>
        <View style={styles.cart}>
          <Image source={IMAGES.CART} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: '100%',
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#31007E',
    overflow: 'hidden',
  },
  arrowBack: {
    width: 15,
    height: 20,
    marginEnd: 8,
  },
  cart: {
    zIndex: 300,
    width: 15,
    height: 20,
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
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    resizeMode: 'contain',
    zIndex: 10,
  },
});
