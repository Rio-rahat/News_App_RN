
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './App/Screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './App/Navigations/HomeNavigator';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    padding:20
    
  },
});
