import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Screens/Home.js';
import Detalhes from './src/Screens/Detalhes.js';
import Sobre from './src/Screens/Sobre.js';
import Contato from './src/Screens/Contato.js';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="HomePrincipal" component={Home} />
            <Stack.Screen name="Detalhes" component={Detalhes} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerShown: false,
                        drawerActiveTintColor: '#256aff',
                    }}>
                    <Drawer.Screen
                        name="Home"
                        component={MainStack}
                        options={{ drawerLabel: 'Início' }}
                    />

                    <Drawer.Screen
                        name="Sobre"
                        component={Sobre}
                        options={{ drawerLabel: 'Sobre o Rio' }}
                    />
                    <Drawer.Screen
                        name="Contato"
                        component={Contato}
                        options={{ drawerLabel: 'Contato' }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}
