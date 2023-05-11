import React from "react";
import {
    StyleSheet, View,
    Text, Image,
 } from "react-native";

/* Ca pose probleme voir avec la TEAM
 import { Icon } from 'react-native-elements';
<View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Icon name='menu' />
</View>
*/


const Header = () => {
    return (
        <View style={styles.headerWrapper}>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo/logoBlancEasyJob.png')}
                >
                </Image>
            </View> 
            <View>   
                <Text>Easy Job</Text>
            </View>
        </View>
        
        
    )
}


const styles = StyleSheet.create({
   headerWrapper: {
    backgroundColor: 'black',
    alignItems: 'center',
    minHeight: 30,
    paddingTop: 25,
    paddingBottom: 15,
   },
   logo: {
    width: 120,
    height: 40,

   },
   
})

export default Header;