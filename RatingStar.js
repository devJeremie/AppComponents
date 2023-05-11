import React from "react";
import { Rating, AirbnbRating } from 'react-native-elements';
import {
    StyleSheet, View,
    Text, Image,
    Tab,Nav,
    TouchableOpacity,
 } from "react-native";


  
  export default function RatingSTar () {
    return (
        <View>
            <AirbnbRating
                count={5}
                defaultRating={5}
                reviews={[]}
                size={20}
            />
        </View>
    )
  }
  
  