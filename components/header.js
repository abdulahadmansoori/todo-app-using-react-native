import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:"#115ffd",
        height: 60,
        width: "100%"
    },
    title:{
        color: "white",
        textAlign:"center",
        fontSize: 20,
        fontWeight: 500,
        marginTop:20,
    },
  });
  