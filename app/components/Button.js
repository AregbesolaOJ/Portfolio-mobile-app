import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import { buttonStyles } from '../styles';

export const CustomButton = ({
  style,
  text,
  onPress,
  disabled,
  loading,
  type,
  hasIcon,
  icon: Icon,
  stretch
}) => (
  <TouchableOpacity
    style={[
      buttonStyles.btnContainer,
      buttonStyles[type],
      style,
      stretch && buttonStyles.stretch,
      disabled && buttonStyles.btnDisabledStyle
    ]}
    onPress={onPress}
    disabled={disabled || loading}
  >
    {loading ? (
      <ActivityIndicator
        animating
        style={{ opacity: loading ? 1 : 0 }}
        size="small"
        color={buttonStyles[type].inner.color}
      />
    ) : (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {hasIcon && <Icon />}
        <Text style={[buttonStyles.btnText, buttonStyles[type].inner]}>{text}</Text>
      </View>
    )}
  </TouchableOpacity>
);

CustomButton.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  hasIcon: PropTypes.bool,
  icon: PropTypes.func,
  loading: PropTypes.bool,
  type: PropTypes.string
};

CustomButton.defaultProps = {
  type: 'primary'
};
