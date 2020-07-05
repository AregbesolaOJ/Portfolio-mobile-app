import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  RefreshControl,
  StatusBar,
  Platform
} from 'react-native';
import { authStyles } from '../../styles';

export const AuthContainer = ({
  children,
  style,
  refreshing,
  onRefresh
}) => (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : null}
    enabled
  >
    <ScrollView
      style={[authStyles.container]}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <StatusBar barStyle="dark-content" />
      <View style={style}>
        {children}
      </View>
    </ScrollView>
  </KeyboardAvoidingView>
);

AuthContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.object,
  refreshing: PropTypes.bool,
  onRefresh: PropTypes.func,
};
