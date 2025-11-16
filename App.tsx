import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ApplicationScreen from './src/screens/ApplicationScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import Colors from './src/constants/Colors';
import ElectronicInvoicingScreen from './src/screens/menu/ElectronicInvoicingScreen';
import MenuDashboard from './src/screens/menu/MenuDashboard';
import InvalidationScreen from './src/screens/menu/InvalidationScreen';
import CancelledScreen from './src/screens/menu/CancelledScreen';
import ContingencyScreen from './src/screens/menu/ContingencyScreen';
import EZReportsScreen from './src/screens/EZReportsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: Colors.primary },
            }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="Application" component={ApplicationScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="Record" component={ElectronicInvoicingScreen} />
            <Stack.Screen name="MenuDashboard" component={MenuDashboard} />
            <Stack.Screen name="Invalidation" component={InvalidationScreen} />
            <Stack.Screen name="Contingency" component={ContingencyScreen} />
            <Stack.Screen name="Cancelled" component={CancelledScreen} />
            <Stack.Screen name="EZReports" component={EZReportsScreen} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});

export default App;