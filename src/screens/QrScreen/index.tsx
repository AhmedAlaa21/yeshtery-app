import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets';
import {Navbar} from '../../components';

export function QrScreen({route, navigation}: {route: any; navigation: any}) {
  const params = route.params;
  console.log(params.itemId);

  const handleQr = () => {
    navigation.navigate('DetailsScreen', {scanned: true});
  };

  return (
    <View>
      <Navbar title="scan code" handlePress={()=> navigation.goBack()} />
      <View style={styles.container}>
        <TouchableOpacity onPress={handleQr}>
          <Image source={IMAGES.QRScan} style={styles.qrImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 700,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  qrImg: {
    width: 300,
    height: 300,
  },
});
