import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { stylesheet } from 'react-native';
import { Container, Logo, CardsContainers, Card, Avatar, Footer, Name, Bio, ButtonsContainer, Buttons, Dislike, Like, Empty, LogoLogout  } from '../../pages/Main/MainStyles';

import api from '../../services/api';

import logo from '../../assets/logo.png';
import dislike from '../../assets/dislike.png';
import like from '../../assets/like.png';

export default function Main({ navigation }) {
  const id = navigation.getParam('user');
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user: id,
        }
      })
      setUsers(response.data);
    }
    loadUsers();
  }, [id]);

  async function handleLike() {
    const [user, ...rest] = users;

    await api.post(`/devs/${user._id}/likes`, null, {
      headers: { user: id },
    })
    setUsers(rest);
  }

  async function handleDislike () {
    const [user, ...rest] = users;

    await api.post(`/devs/${user._id}/dislike`, null, {
      headers: { user: id },
    })
    setUsers(rest);
  }

  async function handleLogout() {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  }

  return (
    <Container>
      <LogoLogout onPress={handleLogout}>
       <Logo source={logo} />
      </LogoLogout>
      <CardsContainers>
        { users.length === 0
        ? <Empty>Acabou :-(</Empty>
        : (
          users.map((user, index) => (
          <Card key={user._id} style={{zIndex: users.length - index}}>
          <Avatar source={{ uri: user.avatar }} />
          <Footer>
            <Name>{user.name}</Name>
            <Bio numberOfLines={3}>{user.bio}</Bio>
          </Footer>
        </Card>
        ))
        ) }
      </CardsContainers> 
      { users.length > 0 && (
        <ButtonsContainer>
          <Buttons onPress={handleDislike}>
            <Dislike source={dislike} />
          </Buttons>
          <Buttons onPress={handleLike}>
            <Like  source={like}/>
          </Buttons>
        </ButtonsContainer>
      ) }
    </Container>
  );
}