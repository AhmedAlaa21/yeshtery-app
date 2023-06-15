import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {
  ColorContainer,
  GetItemMethod,
  LoadingIndicator,
  Navbar,
  RewardOverlay,
  SizeContainer,
  SliderComponent,
} from '../../components';
import {IMAGES} from '../../assets';
import {MOCK_DATA} from '../../utils/mockdata';
import {ScrollView} from 'react-native-gesture-handler';
import {theme} from '../../utils';

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
      })
      .catch(error => console.log(error));
  }, []);

  const renderNameAndPrice = () => {
    return (
      <View style={styles.nameAndPrice}>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <View style={styles.pricing}>
          <Text style={styles.price}>{`( ${product.price} ) EGP`}</Text>
          <Text style={styles.deletedPrice}>{`${product.price} EGP`}</Text>
        </View>
      </View>
    );
  };

  const renderColors = () => {
    return (
      <View style={styles.colorWrapper}>
        <Text style={styles.sideTitle}>color</Text>
        <View style={styles.colors}>
          <ColorContainer colors={availableColors} />
        </View>
      </View>
    );
  };

  const renderSize = () => {
    return (
      <View style={styles.sizeWrapper}>
        <Text style={styles.sideTitle}>size</Text>
        <View style={styles.size}>
          <SizeContainer sizes={availableSizes} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.parent}>
      <Navbar
        title={product.name}
        handlePress={() => {
          navigation.goBack();
        }}
      />
      {loading || product === undefined ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {product.images !== undefined ? (
              <SliderComponent images={product.images} />
            ) : (
              <Text>There is no Images to show!</Text>
            )}
            {renderNameAndPrice()}
            <Text style={styles.description}>{product.description}</Text>
            {renderColors()}
            {renderSize()}
            <GetItemMethod
              imgPath={IMAGES.QR}
              methodName="Scan"
              reward="& get 100 points"
              handlePress={() => {
                if (scanned) return;
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
            <View style={{paddingVertical: 50}} />
          </ScrollView>
        </View>
      )}
      {scanned && <RewardOverlay />}
    </View>
  );
};

const {colors, sizes} = theme;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: colors.navbarBackground,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    backgroundColor: colors.white,
  },
  nameAndPrice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
    paddingHorizontal: 3,
  },
  name: {
    color: colors.black,
    fontSize: sizes.large,
    fontWeight: 'bold',
    flex: 1,
    maxWidth: '50%',
    overflow: 'hidden',
  },
  pricing: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
  },
  price: {
    fontSize: sizes.small,
    color: 'blue',
  },
  deletedPrice: {
    fontSize: sizes.small,
    color: colors.gray,
    textDecorationLine: 'line-through',
  },
  description: {
    fontSize: sizes.small,
    textAlign: 'left',
    lineHeight: 22,
    color: 'rgba(9, 10, 10, 0.6)',
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
