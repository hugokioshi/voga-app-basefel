import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import Inicial_container from '../componentes/Inicial_conteiner';
import Body from '../componentes/Body';
import Input from '../componentes/Input';
import Botao from '../componentes/Botao';

import { useNavigation } from '@react-navigation/native';

import { register } from '../sevices/auth_serv';

export default function Cadastro() {
  const navigation = useNavigation();

  const handleRegister = () => {
    register({
      name: nome,
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);

      if (res) {
        Alert.alrt('Atenção, Usuário cadastrado!', [{text:'Ok', onPress:()=>navigation.goBack()}
        ]);
      } else {
        Alert.alert('Usuário não cadastrado.');
      }
    });
  };

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
          <View style={{ alignContent: 'center', top: 70 }}>
            <Text>Nome:</Text>
            <Input />
            <Text>Email:</Text>
            <Input />
            <Text>Senha:</Text>
            <Input />

            <Botao onPress={handleRegister}>Cadastrar</Botao>
          </View>
        </Body>
      </ImageBackground>
    </Inicial_container>
  );
}
