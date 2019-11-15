import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f5f5f5;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  margin-top: 30px;
`;

export const CardsContainers = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500px;
`;

export const Card = styled.View`
  border-width: 1;
  border-color: #ddd;
  border-radius: 8px;
  margin: 30px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Avatar = styled.Image`
  flex: 1;
  height: 300px;
`;

export const Footer = styled.View`
  background: #fff;
  padding: 20px;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

export const Bio = styled.Text`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
  line-height: 18px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const Buttons = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #FFF;
  justify-content: center;
  align-items: center;
  margin: 20px;
  elevation: 2px;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-offset: {
    width: 0,
    height: 2px,
  }
`;

export const Dislike = styled.Image``;

export const Like = styled.Image``;

export const Empty = styled.Text`
  align-self: center;
  color: #999;
  font-size: 24px;
  font-weight: bold;
`;

export const LogoLogout = styled.TouchableOpacity``;
