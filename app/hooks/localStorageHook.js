import { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

// Custom hook to dynamically update app asyncStorage/localStorage anywhere in-app

export const useLocaleStorage = (key, initialValue) => {
  const [storeValue, setStoreValue] = useState(async () => {
    try {
      const storedKey = await AsyncStorage.getItem(key);
      // return parsed stored json or if none return initialValue
      return storedKey ? JSON.parse(storedKey) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setKeyValue = async value => {
    try {
      const valueToStore = typeof value === 'function' ? value(storeValue) : value;
      setStoreValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.log(err);
    }
  };

  const removeKey = async () => {
    setStoreValue(null);
    await AsyncStorage.removeItem(key);
  };

  return [storeValue, setKeyValue, removeKey];
};
