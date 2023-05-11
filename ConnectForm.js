import React, { useState } from 'react';
import { 
    View, TextInput,
    Button, Text,
    StyleSheet,
} from 'react-native';

const Form = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(`Name: ${name}, Mot de passe: ${password}`);
    // Envoyer les données du formulaire à notre serveur 
  };

  return (
    <View>
        <View style={styles.formContainer}>
            <View style= {styles.form}>
                <Text style={styles.titleForm}>Connexion</Text>
            </View>
            <TextInput
                style= {styles.input}
                placeholder="Nom"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style= {styles.input}
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
            />
            <View style={styles.btn}>
                <Button
                    style= {styles.connectButton}
                    title="Se connecter"
                    onPress={handleSubmit}
            />
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#87cefa',
        padding: 10,
        borderRadius: 15,
        margin: 20,
        marginVertical: 10,

    },
    titleForm: {
        margin: 20,
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
    },
    input: {
        height: 40,
        margin: 25,
        marginBottom: 25,
        borderWidth: 1,
        padding: 10,

    },
    connectButton: {
        
    },
    btn: {
        marginTop: 30,
        width: 150,
        alignItems:'center',
        marginHorizontal: 100,
    }
})

export default Form;