import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/SignIn'
import Home from './pages/Home'
import Book from './pages/Book'
const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
                <Screen name="Login" component={Login} />
                <Screen name="Home" component={Home} />
                <Screen name="Book" component={Book} />
            </Navigator>
        </NavigationContainer>
    );
}
export default Routes;
