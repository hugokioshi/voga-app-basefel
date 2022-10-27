import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Novasenha from '../pages/Novasenha';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ header: () => null }}
      />
       <Stack.Screen
        name="Novasenha"
        component={Novasenha}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};
export default Main;
