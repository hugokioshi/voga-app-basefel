import React from 'react';
import {View, Text} from 'react-native'
import useUser from '../contexts/Usercontext'

export default function Home(){

const {name} = useUser();
  

  return(
    <View 
    style={{alignItems:'center'}}>
    <Text>Bem-vindo(a), {name}!</Text>
    </View>
  );

}