import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { theme } from '../../utils';

type IProps = {
  methodName: string;
  reward: string;
  imgPath: ImageSourcePropType;
  handlePress: () => void;
  btnTitle: string;
  scanned?: boolean;
};
export function GetItemMethod(props: IProps) {
  return (
    <View style={styles.row}>
      <View style={styles.imgAndText}>
        <Image source={props.imgPath} style={styles.methodImg} />
        <View>
          <Text style={styles.methodName}>{props.methodName}</Text>
          <Text style={styles.reward}>{props.reward}</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity onPress={props.handlePress}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#5C4CDB', '#4F63DB', '#0DD2DB']}
            style={styles.buttonBackground}>
            <Text style={styles.buttonText}>{props.btnTitle}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const {colors, sizes} = theme;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  imgAndText: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    flex: 2,
  },
  methodImg: {
    width: 40,
    height: 40,
  },
  methodName: {
    color: 'blue',
    fontSize: 18,
  },
  reward: {
    fontSize: 16,
  },
  btn: {
    flex: 1,
  },
  buttonBackground: {
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  done: {
    backgroundColor: '#000',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});
