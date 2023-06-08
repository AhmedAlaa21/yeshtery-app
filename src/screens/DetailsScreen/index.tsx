import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {
  ColorContainer,
  CustomSlider,
  GetItemMethod,
  Navbar,
  RewardOverlay,
  SizeContainer,
  SliderComponent,
} from '../../components';
import {IMAGES} from '../../assets';
import {MOCK_DATA} from '../../utils/mockdata';

export const DetailsScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const {itemId} = route.params;
  const {scanned} = route.params;
  const [product, setProduct] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const {availableColors, availableSizes} = MOCK_DATA;

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api-dev.yeshtery.com/v1/yeshtery/product?product_id=${itemId}`,
      )
      .then(response => {
        setProduct(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.parent}>
      <Navbar title={product.name} />
      {loading || product === undefined ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.container}>
          {console.log(JSON.stringify(product.images, null, 2))}
          <View style={styles.nameAndPrice}>
            <Text style={styles.name} numberOfLines={2}>
              {product.name}
            </Text>
            <View style={styles.pricing}>
              <Text style={styles.price}>{`( ${product.price} ) EGP`}</Text>
              <Text style={styles.deletedPrice}>{`${product.price} EGP`}</Text>
            </View>
          </View>
          <Text style={styles.description}>{product.description}</Text>
          <View style={styles.colorWrapper}>
            <Text style={styles.sideTitle}>color</Text>
            <View style={styles.colors}>
              <ColorContainer colors={availableColors} />
            </View>
          </View>
          <View style={styles.sizeWrapper}>
            <Text style={styles.sideTitle}>size</Text>
            <View style={styles.size}>
              <SizeContainer sizes={availableSizes} />
            </View>
          </View>
          <GetItemMethod
            imgPath={IMAGES.QR}
            methodName="Scan"
            reward="& get 100 points"
            handlePress={() => {
              navigation.navigate('QrScreen', {itemId: itemId});
            }}
            btnTitle={scanned ? 'Done' : 'Scan'}
            scanned={scanned}
          />
          <GetItemMethod
            imgPath={IMAGES.BILL}
            methodName="Buy & Submit"
            reward="the receipt for 120 points"
            handlePress={() => {}}
            btnTitle="Add to Cart"
          />
          {scanned && <RewardOverlay />}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  container: {
    padding: 20,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  nameAndPrice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  name: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    maxWidth: '50%',
    overflow: 'hidden',
  },
  pricing: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    maxWidth: '50%',
  },
  price: {
    fontSize: 16,
    color: 'blue',
  },
  deletedPrice: {
    fontSize: 16,
    color: '#777',
    textDecorationLine: 'line-through',
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 22,
  },
  colorWrapper: {
    marginVertical: 16,
  },
  sideTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'blue',
  },
  colors: {
    marginTop: 8,
    flexDirection: 'row',
    columnGap: 10,
  },
  sizeWrapper: {
    marginVertical: 16,
  },
  size: {
    flexDirection: 'row',
    marginVertical: 8,
    columnGap: 10,
  },
});
