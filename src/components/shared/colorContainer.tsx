import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export function ColorContainer({colors}: {colors: any}) {
  const [selectedColor, setSelectedColor] = useState(0);

  const isSelected = (id: number) => {
    if (selectedColor === id) {
      return styles.selectedColor;
    }
  };
  return (
    <View style={styles.container}>
      {colors.map((i: any, index: number) => {
        return (
          <TouchableOpacity key={index} onPress={() => setSelectedColor(i.id)}>
            <View
              style={[
                styles.circle,
                {backgroundColor: i.color},
                isSelected(i.id),
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderColor: 'blue',
    borderWidth: 0.5,
  },
  selectedColor: {
    borderColor: 'blue',
  },
});
