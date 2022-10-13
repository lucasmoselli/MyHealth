import React from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Login = (props) => {


    const {email, senha, valorEmail, valorSenha} = props;

    
    return(
        <View style = {styles.login}>
            <View style = {styles.loginFlex}>
                <Text style = {styles.rotuloTexto}>{email}</Text>
                <TextInput value = {valorEmail} style = {styles.rotuloInput} placeholder = "Digite seu e-mail"></TextInput>
            </View>
            <View style = {styles.loginFlex}>
                <Text style = {styles.rotuloTexto}>{senha}</Text>
                <TextInput value = {valorSenha} style = {styles.rotuloInput} secureTextEntry={true}></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    login:{
        marginTop: 30,
        flexDirection: "column"
    },

    loginFlex:{
        marginBottom: 30,
        flexDirection: "row"
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
    buttonEntrar:{
        alignSelf: "center",
        paddingHorizontal: 50,
        paddingVertical: 5,
        backgroundColor: "#49B976",
        borderRadius: 5,
        borderColor: "#37BD6D",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 50
      },
    
      buttonTexto:{
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
      },
    
})

export default Login;