import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Login';
import DiveSitesScreen from '../screens/DiveSites';
import DivePlanScreen from '../screens/DivePlan';
import IdentifierScreen from '../screens/Identifier';
import ProfileScreen from '../screens/Profile';
import OperatorScreen from '../screens/OperatorProfile';


const Tab = createBottomTabNavigator();

export default function Navbar() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Dive Sites" component={DiveSitesScreen} />
                <Tab.Screen name="Dive Plan" component={DivePlanScreen} />
                <Tab.Screen name="Identifier" component={IdentifierScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Operator Profile" component={OperatorScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}