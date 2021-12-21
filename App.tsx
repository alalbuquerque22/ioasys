import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { Heebo_100Thin,Heebo_400Regular, Heebo_700Bold, Heebo_300Light,Heebo_200ExtraLight, useFonts } from '@expo-google-fonts/heebo';
import Routes from './src/routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    Heebo_100Thin,
    Heebo_200ExtraLight,
    Heebo_300Light,
    Heebo_400Regular,
    Heebo_700Bold
  })
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <Routes />
      </>
    );
  }
}



export default App;