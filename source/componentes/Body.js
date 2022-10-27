import React from 'react';
import { View } from 'react-native';

export default function Body({ children }) {
  return (
    <View
      style={{
        margin: 30,
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      {children}
    </View>
  );
}
