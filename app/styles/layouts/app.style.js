import { StyleSheet, Platform } from 'react-native';
import { color, fonts } from '../variables.style';
import { widthPercentage } from '../common.style';

export const appStyles = StyleSheet.create({
  container: {
    width: widthPercentage(100),
    backgroundColor: color.WHITE,
    paddingHorizontal: 10,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 40 : 10,
  },
  title: {
    fontFamily: fonts.family._MONTSERRAT_BOLD,
    fontSize: fonts.size._LARGE,
    lineHeight: 40,
    color: color.DARK,
  },
  iconContainer: {
    paddingTop: 5,
    marginRight: 5
  },
  icon: {
    fontSize: fonts.iconSize._LARGE
  },
});
