import React from 'react';
import { View } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import LoginForm from '../components/LoginForm';

const LoginScreen: React.FC = () => {
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.card}>
        <View style={GlobalStyles.formSection}>
          <LoginForm />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
