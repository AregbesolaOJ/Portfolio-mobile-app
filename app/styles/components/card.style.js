import { StyleSheet } from 'react-native';
import { color } from '../variables.style';
import { widthPercentage } from '../common.style';

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: color.WHITE,
    width: widthPercentage(92),
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 20,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: 'rgb(21, 21, 25)',
    shadowOpacity: 0.08,
    elevation: 1.5
  },
  welcomeStyle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  iconContainer: {
    display: 'none',
    width: 50,
    height: 50,
    backgroundColor: '#C5C4FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100 / 2,
  }
});
