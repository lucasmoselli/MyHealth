import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'
import MyHealth from "../components/MyHealth";




const GPS = () =>{
    return(
        <View >
            <MyHealth></MyHealth>
            <View style = {styles.body}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor: "#ADD5D0",
        height: 600,
        justifyContent: "center",
        alignItems: "center"

    }
})
export default GPS