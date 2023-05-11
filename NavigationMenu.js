import React from 'react';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../pages/HomeScreen';
import Profil from '../pages/ProfilCandidat';

//Création menu burger
const Drawer = createDrawerNavigator();

const NavigationMenu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profil" component={Profil} />
    </Drawer.Navigator>
  );
};

export default NavigationMenu;