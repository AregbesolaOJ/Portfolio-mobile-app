import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import FeatherIcon from 'react-native-vector-icons/SimpleLineIcons';
import { textStyles, color, fonts } from '../styles';

export const EmptyScreen = ({ icon, title }) => (
  <View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
    <FeatherIcon
      name={icon}
      style={{
        color: color.PRIMARY,
        marginBottom: 10,
        fontSize: fonts.iconSize._EXTRA_LARGE,
      }}
    />
    <Text style={[textStyles.mediumText, { textAlign: 'center' }]}>
      {title}
    </Text>
  </View>
);

EmptyScreen.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
};
