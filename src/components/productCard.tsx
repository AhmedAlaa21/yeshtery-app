import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Pricing } from "./shared";
import { IMAGES } from "../assets";
import { Product } from "../interfaces/product";

type IProps = {
  product: Product;
  handlePress: () => void;
};

const IMG_URL = "https://develop.yeshtery.com/files/";

export function ProductCard(props: IProps) {
  return (
    <TouchableOpacity onPress={props.handlePress} style={styles.card}>
      <View style={styles.productImgWrapper}>
        <Image
          source={{ uri: `${IMG_URL}${props.product.image_url}` }}
          style={styles.productImg}
          resizeMode="contain"
        />
      </View>
      {/* PRODUCT INFO */}
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{props.product.name}</Text>
        <View style={styles.pricingWrapper}>
          <Pricing imgPath={IMAGES.QR} price={props.product.price} />
          <Pricing imgPath={IMAGES.BILL} price={props.product.price} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 140,
    marginHorizontal: 10,
    alignSelf: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 3,
    marginVertical: 15,
    columnGap: 20
  },
  productImgWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  productImg: {
    width: 120,
    height: 120,
  },
  productInfo: {
    flex: 2,
    justifyContent: "center",
    padding: 20,
    backgroundColor: ''
  },
  productName: {
    fontWeight: "500",
    flex: 1,
  },
  pricingWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingRight: 20,
  },
});
