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

import {useUser} from '../contexts/Usercontext';
import { useNavigation } from '@react-navigation/native';

import {login} from '../sevices/auth_serv';

export default function Login() {

  const navigation = useNavigation();
  const {setSigned, setName} = useUser();


  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  const handleLogin = () => {
    login({
    
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);

if(res && res.user){
  setSigned(true);
  setName(res.user.name)
}else{
  Alert.alert('Usuário ou senha inválido.')
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
          <View style={{ alignContent: 'center', top: 100 }}>
            <Text>Email:</Text>
            <Input
              value={email}
              onChangeText={(text) => setEmail(text)}
              left={<TextInput.Icon name="account" />}
            />
            <Text>Senha:</Text>
            <Input
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              left={<TextInput.Icon name="key" />}
            />
            <Text
              style={{
                textAlign:'right',
                color: 'blue',
                marginBottom: 10,
              }}
              onPress={() => navigation.navigate('Novasenha')}>
              Esqueci minha senha
            </Text>

            <Botao 
            onPress={handleLogin}
            >Login</Botao>

            <Botao onPress={() => navigation.navigate('Cadastro')}>
              Cadastrar
            </Botao>
          </View>
        </Body>
      </ImageBackground>
    </Inicial_container>
  );
}
