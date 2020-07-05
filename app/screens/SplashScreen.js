import React from 'react';
import {
  View,
  Platform,
  StatusBar,
  Text
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { splashScreenStyles, color, textStyles } from '../styles';

const Splash = () => {
  return (
    <View style={splashScreenStyles.container}>
      {Platform.OS === 'ios' ? (
        <View style={{ backgroundColor: color.WHITE }}>
          <StatusBar translucent barStyle="light-content" />
        </View>
      ) : null}
      <Animatable.View
        animation="pulse"
        easing="ease-in"
        iterationCount="infinite"
        style={{ alignItems: 'center' }}
      >
        <Text style={{ ...textStyles.largeText, color: color.WHITE }}>
          JohnKey.dev
        </Text>
      </Animatable.View>
    </View>
  );
};

export default Splash;
