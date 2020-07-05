import React from 'react';
import FeatherIcon from 'react-native-vector-icons/SimpleLineIcons';
import { View, StyleSheet } from 'react-native';
import { color, rounded } from '../styles';

export const BottomTab = ({ active, name }) => {
  const icon = (
    <FeatherIcon
      name={name}
      size={25}
      style={{ color: active ? color.PRIMARY : color.GREY }}
    />
  );

  return (
    <View style={styles.containerStyle}>
      {icon}
      <View style={{ ...styles.labelStyle, opacity: active ? 1 : 0 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignSelf: 'stretch',
    height: 50,
    paddingVertical: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelStyle: {
    ...rounded(7),
    backgroundColor: color.PRIMARY,
    marginTop: 3,
  }
});
