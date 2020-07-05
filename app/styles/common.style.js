import { Dimensions, StyleSheet, Platform } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { color } from './variables.style';

const { width, height } = Dimensions.get('window');

export const heightPercentage = perc => (height / 100) * perc;
export const widthPercentage = perc => (width / 100) * perc;
export const rounded = val => ({
  height: val,
  width: val,
  borderRadius: val / 2,
  overflow: 'hidden',
});
export const navTopPadding =
  Platform.OS === 'ios' ? (isIphoneX() ? 20 : 10) : 10;

export const common = StyleSheet.flatten({
  container: {
    backgroundColor: color.WHITE,
    flex: 1
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  textCentered: {
    textAlign: 'center',
  },
  bold: {
    fontWeight: '700'
  },
  dark: {
    color: color.DARK
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  uppercase: {
    textTransform: 'uppercase'
  },
});

export const formStyles = StyleSheet.create({
  formGroup: {
    justifyContent: 'space-evenly'
  },
  error: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: color.RED
  }
});

export const sideBarStyles = StyleSheet.create({
  drawerContent: {
    flex: 1
  },
  info: {
    paddingLeft: 15
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold'
  },
  caption: {
    fontSize: 12,
    lineHeight: 14
  },
  drawerSection: {
    marginTop: 15
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  }
});
