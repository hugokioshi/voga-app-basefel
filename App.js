import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import Auth from './source/sevices/auth_serv'
import UserProvider from './source/contexts/Usercontext'
import Route from './source/navigations/Route';

const App = () => {
  return (
    
    <NavigationContainer>
      <Auth/>
    </NavigationContainer>
    
  );
};
export default App;
