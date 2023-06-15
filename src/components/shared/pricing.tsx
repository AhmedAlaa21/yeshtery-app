import {
  ImageSourcePropType,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { theme } from '../../utils';

type IProps = {
  imgPath: ImageSourcePropType;
  price: string;
  handlePress?: () => void;
  navigation?: any;
};

export function Pricing(props: IProps) {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.handlePress}>
      <Image source={props.imgPath} style={styles.img} />
      <Text style={styles.text}>{props.price.toString()}</Text>
    </TouchableOpacity>
  );
}

const {colors} = theme;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.pricingBackground,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 79,
    height: 42,
    padding: 0,
    marginRight: 15,
    borderRadius: 6,
  },
  img: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 18,
    color: '#1F54CF',
    fontWeight: '300',
  },
});
