import { StatusBar, } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LoginScreen from './screens/Login';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9ECF4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});