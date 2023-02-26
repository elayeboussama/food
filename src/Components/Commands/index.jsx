import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {styles} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from '@rneui/themed';

// import { TouchableOpacity } from "react-native-gesture-handler";
const Commands = () => {

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(date) {
    return [
      date.toLocaleDateString('en-US'),
      date.toLocaleTimeString('en-US')
    ].join(' ');
  }


  return (
    <View style={styles.Commands}>
      <View style={styles.CommandsHeader}>
        <Text style={styles.textBold}>Commande</Text>
        <Text>{formatDate(new Date())}</Text>
      </View>

      <View style={styles.devider}/>

      <View style={styles.services}>
        <View style={styles.service}>
          <MaterialIcons
              name="delivery-dining"
              size={27}
              color="black"
            />
          <Text style={styles.text}>Livraison</Text>
        </View>
        <View style={styles.service}>
          <MaterialCommunityIcons
              name="food-takeout-box"
              size={27}
              color="black"
            />
          <Text style={styles.text}>Enporter</Text>
        </View>
        <View style={styles.service}>
          <MaterialIcons
              name="food-bank"
              size={27}
              color="black"
            />
          <Text style={styles.text}>Sur place</Text>
        </View>
      </View>

      <View style={styles.CommandsBoard}></View>
      <View style={styles.Calculations}>
        <View style={styles.Calculation}>
          <Text style={styles.text}>Sub Total</Text>          
          <Text>0.00</Text>
        </View>
        <View style={styles.Calculation}>
          <Text style={styles.text}>Tax</Text>          
          <Text>0</Text>
        </View>
        <View style={styles.Calculation}>
          <Text style={styles.text}>Total</Text>          
          <Text>0.00</Text>
        </View>
      </View>

      <View style={styles.Payement}>
        <Text style={styles.text}>Moyen de payement</Text>
      </View>


      <View style={styles.PayMethods}>
        <View style={styles.Med}>
          <MaterialIcons
              name="attach-money"
              size={27}
              color="black"
            />
          <Text style={styles.text}>Espèce</Text>
        </View>
        <View style={styles.Med}>
          <MaterialIcons
              name="credit-card"
              size={27}
              color="black"
            />
          <Text style={{...styles.text,textAlign:"center"}}>Carte Bancaire</Text>
        </View>
      </View>

      <View style={styles.ButtonsFooter}>
        <Button 
          size="sm"
          color="success"
          title="valider" 
        />
        <Button 
          size="sm"
          color="warning"
          title="En attente" 
        />
        <Button 
          size="sm"
          color="error"
          title="Annuler" 
        />
      </View>
       
    </View>
  );
};


export default Commands;
