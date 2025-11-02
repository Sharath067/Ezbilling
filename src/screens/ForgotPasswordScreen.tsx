import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword: React.FC = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>('');

  const validateField = (value: string) => {
    if (!value.trim()) {
      return 'Username or Email is required';
    } else if (value.trim().length < 4) {
      return 'Minimum 4 characters required';
    } 
    // else if (value.includes('@') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    //   return 'Enter a valid email address';
    // }
    return '';
  };

  const handleChange = (value: string) => {
    setEmail(value);
    const validationError = validateField(value);
    setError(validationError);
  };

  const handleSend = () => {
    const validationError = validateField(email);
    setError(validationError);

    if (!validationError) {
      console.log('Password reset link sent to:', email);
    }
  };

  const handleScreenPress = () => {
    Keyboard.dismiss();
    const validationError = validateField(email);
    setError(validationError);
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/left-arrow.png')}
            style={styles.backarrow}
          />
        </TouchableOpacity>

        <View style={styles.card}>
          <Image
            source={require('../../assets/smart-insight-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.label}>Username or Email address</Text>
          <TextInput
            placeholder="Enter your username or email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={handleChange}
            style={[
              styles.input,
              error ? { borderColor: 'red' } : {},
            ]}
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleSend}>
            <Text style={styles.buttonText}>To send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B2231',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 5,
    zIndex: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '85%',
    padding: 25,
    elevation: 5,
    paddingVertical: 50,
  },
  label: {
    fontSize: 15,
    fontWeight: '400',
    color: '#333',
    marginBottom: 8,
    textAlign: 'left',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1B4F72',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  backarrow: {
    width: 25,
    height: 25,
    tintColor: '#fff',
    marginTop: 30,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: -5,
    marginBottom: 8,
  },
  logo: {
    width: 150,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 30,
    alignSelf: 'center',

  },
});
