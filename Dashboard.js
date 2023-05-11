import React from 'react'
import { 
    StyleSheet, Text,
     View, Pressable } from 'react-native'
import Colors from '../constants/colors'



export default Dashboard = ({  }) => {
    return( 
        <View>
            <View style={styles.Container}>
                <View style={styles.dashContent}>
                    <Text style={styles.dashText}>Reçus</Text>
                    <Text style={styles.resultDash}>5</Text>
                </View>
                <View style={styles.dashContent}>
                    <Text style={styles.dashText}>En attente</Text>
                    <Text style={styles.resultDash}>2</Text>
                </View>
            </View>
            <View style={styles.Container}>
                <View style={styles.dashContent}>
                    <Text style={styles.dashText}>Acceptés</Text>
                    <Text style={styles.resultDash}>1</Text>
                </View>
                <View style={styles.dashContent}>
                    <Text style={styles.dashText}>Refusés</Text>
                    <Text style={styles.resultDash}>3</Text>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    dashContent: {
        backgroundColor: 'mediumturquoise',
        width: 100,
        height: 100,
        borderRadius: 20,
        
    },
    Container:{
        margin: 10,
        flexDirection:'row',
        justifyContent: 'space-evenly',
    },
    dashText:{
        textAlign: 'center',
        marginTop: 10,
        color: 'white'
    },
    resultDash: {
        textAlign:'center',
        margin: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
  
})


