import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import MyHealth from "../components/MyHealth";

const MudarSenha = () =>{
    return(
        <View >
            <MyHealth></MyHealth>
            <View style = {styles.body}>
                <View style = {styles.emailFlex}>
                    <Text style = {styles.rotuloTexto}>E-mail</Text>
                    <TextInput style = {styles.rotuloInput} placeholder = "Digite seu e-mail"></TextInput>
                </View>
                <TouchableOpacity style = {styles.buttonMudarSenha}>
                    <Text style = {styles.buttonTexto}> Recuperar Senha</Text>
                </TouchableOpacity>
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

    },
    emailFlex:{
        marginBottom: 30,
        flexDirection: "row",
        paddingBottom: 100,
        paddingRight: 30,
        alignItems: "center"
    },

    rotuloTexto:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        paddingLeft: 30,
        paddingRight: 10
    },

    rotuloInput:{
        color: "#419ED7",
        backgroundColor: "white",
        width:275,
        height: 35,
        
    },

    buttonTexto:{
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
      },
    
      buttonMudarSenha:{
        width: 150,
        backgroundColor: "#49B976",
        alignSelf: "center",
        alignItems: "center",
        paddingVertical: 5,
      },
})

export default MudarSenha