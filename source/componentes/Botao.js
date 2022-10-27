import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Botao = (props) => {
  return (
    
      <Button
      style={styles.btn}{...props}
        mode="contained" color="orange" />
    
  );
};

export default Botao;

const styles= StyleSheet.create({
  btn:{
    marginTop:10,
    marginBottom:10,
    height:40,
    textAlign:'center',
  },
})