import React,  { useState } from 'react'
import { 
    StyleSheet, View,
    Text, Image,
    } from 'react-native'
import Colors from '../constants/colors'

import ButtonComponent from './ButtonComponent'
import { ScrollView } from 'react-native-gesture-handler'



export default PseudoProfil = ({ children }) => {

    

    return( 
        <ScrollView>
            <View style={styles.place}>
                <View style= {styles.profilePicture} />
                <Text>Pseudo</Text>
                <View style={styles.pseudoTextContainer}>
                    <Text style= {styles.pseudoText}>Type de poste</Text>
                    <Text style= {styles.pseudoText}>Salaire</Text>
                    <Text style= {styles.pseudoText}>Ville</Text>
                </View>
                <View>
                    <Text style={styles.title}>Domaine d'activité</Text>
                    <Text style= {styles.pseudoText}>Sous-titre Activité</Text>
                </View>
                <View>
                    <Text style={styles.title}>Compétences</Text>
                </View>
                <View style={styles.picturesContainer}>
                    <Text>Lorem ipsum</Text>
                    <Image
                        style={styles.picturesStar}
                        source={require('../assets/photo/etoile.png')}
                    >
                    </Image>
                </View>
                <View style={styles.picturesContainer}>
                    <Text>Lorem ipsum</Text>
                    <Image
                        style={styles.picturesStar}
                        source={require('../assets/photo/etoile.png')}
                    >
                    </Image>
                </View>
                <View style={styles.picturesContainer}>
                    <Text>Lorem ipsum</Text>
                    <Image
                        style={styles.picturesStar}
                        source={require('../assets/photo/etoile.png')}
                    >
                    </Image>
                </View>
                <View style={styles.picturesContainer}>
                    <Text>Lorem ipsum</Text>
                    <Image
                        style={styles.picturesStar}
                        source={require('../assets/photo/etoile.png')}
                    >
                    </Image>
                </View>
                <View>
                    <Text style={styles.title}>Expériences</Text>
                </View>
                <View>
                    <Text>Entreprise</Text>
                    <Text>Poste</Text>
                    <Text>Durée</Text>
                </View>
                <View>
                    <Text style={styles.title}>Hobbies</Text>
                </View>
                <View>
                    <Text>Hobbies 1</Text>
                    <Text>Hobbies 2</Text>
                </View>
                <View style={styles.place}>
                    <ButtonComponent
                        style={styles.btnBlue}
                    >
                    Matcher !!
                    </ButtonComponent>
                    <ButtonComponent
                        style={styles.btnBlack}
                    >
                    Retour
                    </ButtonComponent>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    pseudoTextContainer: {
        marginTop:10,
    },
    profilePicture: {
        backgroundColor: 'gray',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 30,
    },
    pseudoText: {
        textAlign: 'center'
    },
    title: {
        fontSize: 25,
        margin: 10,
    },
    picturesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    picturesStar: {
        width:30,
        height: 30,
        alignItems: 'center',
    },
    btnBlue: {
        backgroundColor: "dodgerblue",
        width: 200,
        borderRadius: 6,
        marginBottom: 30,
    },
    btnBlack: {
        backgroundColor: "black",
        width: 100,
        borderRadius: 6,
        marginBottom: 30,
    },
    place:{
        alignItems: 'center',
        marginTop: 20,
    },
    
})
