/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import { appGlobalStore, persistor } from './app/redux/store';
import AppRouter from './app/router';
import Splash from './app/screens/SplashScreen';

const store = appGlobalStore();

const App = () => {
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    setLaunching(true);
    setTimeout(() => {
      setLaunching(false);
    }, 5000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {launching ? (
          <Splash />
        ) : (
          <AppRouter />
        )}
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
};

export default App;
