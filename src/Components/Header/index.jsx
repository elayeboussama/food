import React from "react";
import { Text, View } from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles'
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const Header = () => {


  return (
    <View style={styles.header}>
      
       <View style={styles.logo}>
        <Text style={styles.text}>Logo</Text>
       </View>

       <View >
        <Text style={styles.text}>AppName</Text>
       </View>

       <View>
        <Text style={styles.text}>08:00</Text>
        <Text style={styles.text}>00:00</Text>
       </View>

       <View>
        <Text style={styles.text}>Houmet el Souk</Text>
       </View>

       <View>
        <Text style={styles.text}>55890826</Text>
       </View>

       <View style={styles.buttons}>
       <TouchableOpacity style={styles.btn}>
       <Icon
              name="rotate-right"
              size={15}
              color="white"
            />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
      <Icon
              name="arrow-right"
              size={15}
              color="white"
            />
      </TouchableOpacity>
       
       </View>

       <View>
        <Text style={styles.textBold}>Salut, Caissier</Text>
       </View>
    </View>
  );
};


export default Header;
