import {View, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Product} from '../../interfaces/product';
import {LoadingIndicator, Navbar, ProductCard} from '../../components';
import {theme} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../state/thunk';

export function HomeScreen({navigation}: {navigation: any}) {
  const dispatch: any = useDispatch();
  const {products, isLoading, error}: any = useSelector(
    (state: any) => state.products,
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // const [products, setProducts] = useState<Product[]>([]);
  // const [isLoading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get('https://api-dev.yeshtery.com/v1/yeshtery/products')
  //     .then(response => {
  //       setProducts(response.data.products);
  //     })
  //     .catch(error => console.log(error))
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  const renderItem = ({item}: {item: Product}) => {
    console.log(item);
    return (
      <ProductCard
        product={item}
        handlePress={() => {
          navigation.navigate('DetailsScreen', {itemId: item.id});
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Navbar title="Scan Products" />
      <View>
        {!isLoading ? (
          <View style={styles.productList}>
            <FlatList
              data={products}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        ) : (
          <LoadingIndicator />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.navbarBackground,
  },
  productList: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
