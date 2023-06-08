import {
    ImageSourcePropType,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import {useNavigation} from '@react-navigation/native';
  
  type IProps = {
    imgPath: ImageSourcePropType;
    price: string;
    handlePress?: () => void;
  };
  
  export function Pricing(props: IProps) {
    return (
      <TouchableOpacity style={styles.wrapper}>
        <Image source={props.imgPath} style={styles.img} />
        <Text style={styles.text}>{props.price.toString()}</Text>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: '#FAFAFA',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: 100,
      height: 50,
      padding: 0,
      marginRight: 15,
      borderRadius: 4,
    },
    img: {
      width: 35,
      height: 35,
    },
    text: {
      fontSize: 18,
      color: '#1F54CF',
      fontWeight: '300',
    },
  });
  