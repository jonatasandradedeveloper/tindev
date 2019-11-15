import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage' ;
import { Platform } from 'react-native';
import { Container, Logo, Input, Button, ButtonText } from './LoginStyles';
import api from '../../services/api';
import logo from '../../assets/logo.png';

export default function Login({ navigation }) {
  const [user, setUser] = useState('');

  useEffect(() => {
     AsyncStorage.getItem('user').then(user => {
      if(user) {
        navigation.navigate('Main', { user })
      }
     })
  }, [ ]);

  async function handleLogin() {
    const response = await api.post('/devs', { username: user });
    
    const { _id } = response.data;
    //console.log(_id);
    await AsyncStorage.setItem('user', _id);

    navigation.navigate('Main', { user: _id });
  }
  return (
    <Container 
    behavior="padding"
    enabled={ Platform.OS === 'ios'}
    >
      <Logo source={ logo } />
      <Input 
        autoCapitalize= "none"
        autoCorrect={false}
        placeholder= "Digite seu usuário de Github." 
        placeholderTextColor= "#999"
        value={user}
        onChangeText={setUser}
      />
      <Button onPress={handleLogin} >
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
}