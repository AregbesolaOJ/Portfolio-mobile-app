import { StyleSheet, Platform } from 'react-native';
import { color, fonts } from '../variables.style';

export const authStyles = StyleSheet.flatten({
  container: {
    backgroundColor: color.WHITE,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  },
});

export const splashScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: color.PRIMARY,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export const welcomeStyles = StyleSheet.create({
  container: {
    backgroundColor: color.WHITE,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export const otpStyles = StyleSheet.create({
  code: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(73, 76, 73, 0.37)',
    borderRadius: 4,
  },
  codeText: {
    color: color.GREY,
    fontFamily: fonts.family._MONTSERRAT_REGULAR,
    fontSize: fonts.size._SMALL,
  },
});
