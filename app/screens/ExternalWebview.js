import React from 'react';
import WebView from 'react-native-webview';
import { View, Platform } from 'react-native';
import { AppContainer } from '../components';

export const ExternalWebview = ({ route }) => (
  <AppContainer hasBackButton style={{ paddingHorizontal: 0 }}>
    <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 30 : 0 }}>
      <WebView
        source={{ uri: `${route.params?.route || ''}` }}
      />
    </View>
  </AppContainer>
);
