import React, { useState } from 'react';
import { 
    View, TextInput,
    Button, Text,
    StyleSheet, CheckBox,
} from 'react-native';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activity, setActivity] = useState('');
  
  const [isSelected, setSelected] = useState(false);

  const handleSubmit = () => {
    console.log(`Name: ${name}, Mot de passe: ${password}`);
    // Envoyer les données du formulaire à notre serveur 
  };
  /*<CheckBox 
                value={isSelected}
                onValueChange={setSelected}
                style={styles.checkbox}
            />
            */

  return (
    <View>
        <View style={styles.formContainer}>
            <View>
                <Text style={styles.titleForm}>Inscription</Text>
            </View>
            
            <Text style={styles.labelCheckbox}>Candidat</Text>
            <Text style={styles.labelCheckbox}>Entreprise</Text>
            <TextInput
                style= {styles.input}
                placeholder="Nom"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style= {styles.input}
                placeholder="Prénom"
                value={firstName}
                onChangeText={setFirstName}
            />
              <TextInput
                style= {styles.input}
                placeholder="Pseudo"
               value={pseudo}
                onChangeText={setPseudo}
            />
             <TextInput
                style= {styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style= {styles.input}
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
            />
             <TextInput
                style= {styles.input}
                placeholder="Domaine d'activité"
                value={activity}
                onChangeText={setActivity}
            />
            <View style={styles.btn}>
                <Button
                    style= {styles.connectButton}
                    title="S'enregistrer"
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

export default RegistrationForm;