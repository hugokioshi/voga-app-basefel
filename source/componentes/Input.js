import React from 'react';
import { View, TextInput } from 'react-native';

const Input = () => {
  return (
    <View>
      <TextInput
        style={{
          backgroundColor: 'white',
          height: 40,
          opacity:0.5,
          marginBottom: 5,
          borderColor:"orange",
          borderWidth: 1,
          padding: 5,
        }}
        mode={'outlined'}
      />
    </View>
  );
};
export default Input;
