import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';
import { Text } from '../../components/Text';

const login: React.FC = () => {
  return (
    <View>
      <Container>
        <Text>Login</Text>
      </Container>
    </View>
  );
};

export default login;
