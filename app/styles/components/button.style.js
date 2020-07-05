import { Platform, StyleSheet } from 'react-native';
import { fonts, color } from '../variables.style';

export const buttonStyles = StyleSheet.flatten({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 10,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    height: 45
  },
  primary: {
    borderColor: color.PRIMARY,
    backgroundColor: color.PRIMARY,
    inner: {
      color: color.WHITE,
    }
  },
  white: {
    borderColor: color.WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'transparent',
    inner: {
      color: color.WHITE,
    }
  },
  danger: {
    borderColor: color.RED,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'transparent',
    inner: {
      color: color.RED
    }
  },
  btnDisabledStyle: {
    opacity: 0.75
  },
  stretch: {
    flex: 1,
  },
  btnText: {
    fontSize: fonts.size._REGULAR,
    color: color.WHITE,
    fontFamily: fonts.family._MONTSERRAT_REGULAR,
    textTransform: 'capitalize',
    letterSpacing: 0.25,
    textAlign: 'center'
  },
  icon: {
    color: color.WHITE,
    fontSize: fonts.iconSize._SMALL,
    transform: [{ rotate: '180deg' }],
  },
  iconContainer: {
    width: 30,
    height: 30,
    padding: 7,
    borderRadius: 30,
    backgroundColor: '#15B1EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
