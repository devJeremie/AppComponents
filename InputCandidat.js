import React,  { useState } from 'react'
import { 
    StyleSheet, View,
    TextInput } from 'react-native'
import Colors from '../constants/colors'



export default InputCandidat = ({ children }) => {

    const [searchVille, setSearchVille] = useState('');
    const [searchSkills, setSearchSkills] = useState('');

    return( 
        <View>
            <TextInput
                style= {styles.input}
                placeholder="Rechercher par ville"
                value={searchVille}
                onChangeText={setSearchVille}
            />
            <TextInput
                style= {styles.input}
                placeholder="Rechercher par compétences"
                value={searchSkills}
                onChangeText={setSearchSkills}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        height: 40,
        margin: 25,
        marginBottom: 25,
        borderWidth: 1,
        padding: 10,
      },
})
