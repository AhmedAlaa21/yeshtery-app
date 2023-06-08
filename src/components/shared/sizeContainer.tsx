import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export function SizeContainer({sizes}: {sizes: any}) {
  const [selectedSize, setSelectedSize] = useState(0);

  return (
    <View style={styles.container}>
      {sizes.map((i: any) => {
        return (
          <TouchableOpacity
            style={[
              styles.sizeItem,
              selectedSize === i.id
                ? {borderColor: 'blue'}
                : {borderColor: '#707070'},
            ]}
            key={i.id}
            onPress={() => setSelectedSize(i.id)}>
            <Text
              style={
                selectedSize === i.id ? {color: 'blue'} : {color: '#707070'}
              }>
              {i.size}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
  },
  sizeItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 55,
    height: 35,
    borderRadius: 40,
  },
  sizeText: {
    fontSize: 16,
  },
});
