import React from "react";
import {
    StyleSheet, View,
    Text, Image,
    Tab,Nav,
    TouchableOpacity,
 } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfilCandidat from "../pages/ProfilCandidat";
import VueAllProfilCandidat from "../pages/VueAllProfilCandidat";
import AllCandidatFavorite from "../pages/AllCandidatFavorite";
import DashboardCandidat from "../pages/DashboardCandidat";

const BottomTab = createBottomTabNavigator();

 
function Footer () {
    return (
        <View style={{height: 680}}>
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Dashboard') {
                        iconName = focused
                            ? 'home-outline'
                            : 'home-outline';
                            size = 20;
                    } else if (route.name === 'Mon profil') {
                        iconName = focused
                            ? 'person-circle-outline' : 'person-outline';
                            size = 20;
                    } else if (route.name === 'Candidats') {
                        iconName = focused 
                            ? 'list-circle-outline'
                            : 'list-circle-outline';
                    }else if (route.name === 'Favoris') {
                        iconName = focused
                            ? 'star-half-outline'
                            : 'star-outline';
                    }
          
                      // You can return any component that you like here!
                      return <Ionicons name={iconName} size={size} color={color} />;
                },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
        >
            <BottomTab.Screen name="Dashboard"  component={DashboardCandidat}/>
            <BottomTab.Screen name="Mon profil"  component={ProfilCandidat}/>
            <BottomTab.Screen name="Candidats"  component={VueAllProfilCandidat}/>
            <BottomTab.Screen name="Favoris"  component={AllCandidatFavorite}/>
        </BottomTab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default Footer;
