import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const navigation = useNavigation<any>();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setErrors({});
      setUsername('');
      setPassword('');
    });
    return unsubscribe;
  }, [navigation]);

  const validateField = (field: 'username' | 'password', value: string) => {
    let error = '';
    if (!value.trim()) {
      error = `${field === 'username' ? 'Username' : 'Password'} is required`;
    } else if (value.trim().length < 4) {
      error = 'Minimum 4 characters required';
    }
    return error;
  };

  const handleUsernameChange = (value: string) => {
    setUsername(value);
    const error = validateField('username', value);
    setErrors((prev) => ({ ...prev, username: error || undefined }));
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    const error = validateField('password', value);
    setErrors((prev) => ({ ...prev, password: error || undefined }));
  };

  const handleScreenPress = () => {
    Keyboard.dismiss();
    const usernameError = validateField('username', username);
    const passwordError = validateField('password', password);
    setErrors({
      username: usernameError || undefined,
      password: passwordError || undefined,
    });
  };

  const handleLogin = () => {
    const usernameError = validateField('username', username);
    const passwordError = validateField('password', password);
    setErrors({
      username: usernameError || undefined,
      password: passwordError || undefined,
    });

    if (!usernameError && !passwordError) {
      console.log(' Login successful with:', username, password);
      navigation.navigate('Application');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <View style={{ padding: 20 }}>
         <Image
                    source={require('../../assets/smart-insight-logo.png')}
                    style={styles.logo}
                  />
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder="Enter Username"
          style={[
            GlobalStyles.input,
            errors.username ? { borderColor: 'red' } : {},
          ]}
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={username}
          onChangeText={handleUsernameChange}
        />
        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

        <View style={{ position: 'relative' }}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter Password"
            style={[
              GlobalStyles.input,
              { paddingRight: 40 },
              errors.password ? { borderColor: 'red' } : {},
            ]}
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={handlePasswordChange}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
          >
            <Image
              source={
                showPassword
                  ? require('../../assets/hidden.png')
                  : require('../../assets/eye.png')
              }
              style={styles.eyeIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <TouchableOpacity style={GlobalStyles.button} onPress={handleLogin}>
          <Text style={GlobalStyles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={GlobalStyles.linkText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  eyeButton: {
    position: 'absolute',
    right: 10,
    top: 43,
  },
  eyeIcon: {
    width: 25,
    height: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
    marginBottom: 5,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: -8,
    marginBottom: 5,
  },
  logo: {
    width: 150,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 30,
    alignSelf: 'center',

  },
});

export default LoginForm;
