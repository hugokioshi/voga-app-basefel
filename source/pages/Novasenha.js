import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import Inicial_container from '../componentes/Inicial_conteiner';
import Body from '../componentes/Body';
import Input from '../componentes/Input';
import Botao from '../componentes/Botao';

import { useNavigation } from '@react-navigation/native';


export default function Login() {

  const navigation = useNavigation()


  return (
    <Inicial_container>
      <ImageBackground
        source={require('../Assets/wardrobe.png')}
        style={{
          flex: 1,
          resizeMode: 'cover',
          width: '100%',
        }}>
        <Body>
          <View style={{ alignContent: 'center', top: 68 }}>
            <Text>Nova Senha</Text>
            <Input />
            <Text>Confirmar Senha</Text>
            <Input />

            <Botao>Redefinir Senha</Botao>
          </View>
        </Body>
      </ImageBackground>
    </Inicial_container>
  );
}
