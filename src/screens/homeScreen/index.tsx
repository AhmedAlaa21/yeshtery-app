import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Product} from '../../interfaces/product';
import {Navbar, ProductCard} from '../../components';
import {IMAGES} from '../../assets';

export function HomeScreen({navigation}: {navigation: any}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://api-dev.yeshtery.com/v1/yeshtery/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const renderItem = ({item}: {item: Product}) => (
    <ProductCard
      product={item}
      handlePress={() => {
        navigation.navigate('DetailsScreen', {itemId: item.id});
      }}
    />
  );

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={IMAGES.BACKGROUND} resizeMode="cover">
        <View style={styles.container}>
          <Navbar title="Scan Products" />
          {loading ? (
            <ActivityIndicator size={'large'} color="blue" />
          ) : (
            <View style={styles.productList}>
              <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  productList: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});
