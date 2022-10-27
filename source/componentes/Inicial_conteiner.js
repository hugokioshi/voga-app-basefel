import React from 'react';
import { View } from 'react-native';

const Inicial_container = ({children}) => {
  return (
    <View style={{flex:1, justifyContent:'center'}}>
    {children}
    </View>
  );
};
export default Inicial_container;
