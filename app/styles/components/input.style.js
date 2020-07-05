import { StyleSheet, Platform } from 'react-native';
import { fonts, color } from '../variables.style';

export const inputStyles = StyleSheet.create({
  input: {
    color: color.BLACK,
    paddingRight: 5,
    paddingLeft: 10,
    paddingBottom: 10,
    height: 50,
    fontSize: fonts.size._SMALL,
    fontFamily: fonts.family._MONTSERRAT_MEDIUM,
    lineHeight: 23,
    flex: 2,
    borderWidth: 0,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  label: {
    marginBottom: 5,
    fontSize: fonts.size._SMALL,
  },
  wrapper: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: color.GREY,
    backgroundColor: 'transparent',
    borderRadius: 4,
    borderWidth: 1,
    paddingRight: 10,
  },
  dropdown: {
    paddingBottom: Platform.OS === 'ios' ? 15 : 10,
  },
  checkbox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(210, 210, 210, 0.3)',
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 10
  },
  checked: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 20,
    borderRadius: 4,
  },
  checkboxWrapper: {
    borderColor: 'transparent',
    borderWidth: 0,
    paddingRight: 0,
  }
});
