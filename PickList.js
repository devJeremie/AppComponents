import React, { useState } from 'react'
import { 
    StyleSheet, Text,
     View, Pressable } from 'react-native'
import Colors from '../constants/colors'
import { Picker } from '@react-native-picker/picker';

const options = [
    { label: 'Annonce', value: 'option1' },
    { label: 'Annonce 2', value: 'option2' },
    { label: 'Annonce 3', value: 'option3' },
  ];

  

export default PickList = ({  }) => {
    const [selectedValue, setSelectedValue] = useState(options[0].value);
    return( 
        <View>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
                }>
                {options.map((option) => (
                <Picker.Item
                    key={option.value}
                    label={option.label}
                    value={option.value}
                />
                ))}
            </Picker>
        </View>
    )
}