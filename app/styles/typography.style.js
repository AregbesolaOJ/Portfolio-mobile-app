import { StyleSheet } from 'react-native';
import { color, fonts } from './variables.style';

export const headingStyles = StyleSheet.create({
  largeHeading: {
    fontWeight: 'bold',
    lineHeight: 36,
    letterSpacing: 0.95,
    color: color.DARK,
    fontSize: fonts.size._EXTRA_LARGE,
    fontFamily: fonts.family._MONTSERRAT_BOLD
  },
  mediumHeading: {
    fontWeight: 'bold',
    lineHeight: 24,
    letterSpacing: 0.25,
    color: color.DARK,
    fontSize: fonts.size._LARGE,
    fontFamily: fonts.family._MONTSERRAT_SEMIBOLD
  },
  heading: {
    fontWeight: '600',
    color: color.DARK,
    fontSize: fonts.size._MEDIUM,
    fontFamily: fonts.family._MONTSERRAT_SEMIBOLD
  },
});

export const textStyles = StyleSheet.create({
  alignCenter: {
    textAlign: 'center'
  },
  largeText: {
    color: color.DARK,
    fontSize: fonts.size._EXTRA_LARGE,
    fontFamily: fonts.family._MONTSERRAT_BOLD
  },
  smallText: {
    color: color.GREY,
    fontSize: fonts.size._SMALL,
    fontFamily: fonts.family._MONTSERRAT_REGULAR,
    lineHeight: 20
  },
  mediumText: {
    color: color.GREY,
    fontSize: fonts.size._REGULAR,
    fontFamily: fonts.family._MONTSERRAT_MEDIUM,
    lineHeight: 26,
  },
  errorText: {
    color: color.RED,
    textAlign: 'center',
    marginTop: 10,
    fontSize: fonts.size._SMALL,
    fontFamily: fonts.family._MONTSERRAT_REGULAR
  }
});
