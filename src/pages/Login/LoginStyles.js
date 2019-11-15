import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  background: #F5F5F5;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Logo = styled.Image``;

export const Input = styled.TextInput`
  height: 46px;
  padding: 0 15px;
  align-self: stretch;
  margin-top: 20px;
  background: #FFF;
  border-width: 1;
  border-color: #DDD;
  border-radius: 4px;
`;

export const Button = styled.TouchableOpacity`
  height: 46px;
  align-self: center;
  background: #DF4723;
  border-radius: 4px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
`;