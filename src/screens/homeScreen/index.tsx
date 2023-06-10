import {View, ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Product} from '../../interfaces/product';
import {Navbar, ProductCard} from '../../components';

export function HomeScreen({navigation}: {navigation: any}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // console.log(API_URL)
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
    <View style={styles.container}>
      <Navbar title="Scan Products" />
      <View>
        {loading ? (
          <ActivityIndicator size={'large'} color="blue" />
        ) : (
          <View style={styles.productList}>
            <FlatList
              ListEmptyComponent={
                <ActivityIndicator size={'large'} color="blue" />
              }
              data={products}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#31007E',
  },
  productList: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
