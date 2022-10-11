import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import MyHealth from "../components/MyHealth";

const Cadastro = () =>{
    return(
        <View>
            <MyHealth></MyHealth>
            <View style = {styles.body}>
                <View style = {styles.rotulo}>
                    <Text style = {styles.rotuloTextoNome}>Nome Completo</Text>
                    <TextInput style = {styles.rotuloInput}></TextInput>
                </View>
                <View style = {styles.rotulo}>
                    <Text style = {styles.rotuloTextoSexo}>Sexo</Text>
                </View>
                <View style = {styles.rotulo}>
                    <Text style = {styles.rotuloTextoData}>Data Nascimento</Text>
                </View>
                <View style = {styles.rotulo}>
                    <Text style = {styles.rotuloTextoEmail}>E-mail</Text>
                    <TextInput style = {styles.rotuloInput}></TextInput>
                </View>
                <View style = {styles.rotulo}>
                    <Text style = {styles.rotuloTextoSenha}>Senha</Text>
                    <TextInput style = {styles.rotuloInput}  secureTextEntry={true}></TextInput>
                </View>
                <View style = {styles.rotulo}>
                        <Text style = {styles.rotuloTextoRepetirSenha}>Repetir Senha</Text>
                    <TextInput style = {styles.rotuloInput}  secureTextEntry={true}></TextInput>
                </View>
                <TouchableOpacity style = {styles.buttonCadastrar}>
                    <Text style = {styles.buttonTexto}>Cadastrar</Text>
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
        alignItems: "center",
    },

    rotulo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        width: 400,
    },
    
    rotuloTextoNome:{
        justifyContent: "center",
        width: "40%",
        color: "white",
        fontSize: 16,
        paddingLeft: 30
    },

    rotuloTextoData:{
        justifyContent: "center",
        width: "40%",
        color: "white",
        fontSize: 16,
        paddingLeft: 20
    },

    rotuloTextoSexo:{
        justifyContent: "center",
        width: "40%",
        color: "white",
        fontSize: 16,
        paddingLeft: 110
    },

    rotuloTextoEmail:{
        justifyContent: "center",
        width: "40%",
        color: "white",
        fontSize: 16,
        paddingLeft: 100
    },

    rotuloTextoSenha:{
        justifyContent: "center",
        width: "40%",
        color: "white",
        fontSize: 16,
        paddingLeft: 100
    },

    rotuloTextoRepetirSenha:{
        justifyContent: "center",
        width: "40%",
        color: "white",
        fontSize: 16,
        paddingLeft: 50
    },
    rotuloInput:{
        color: "#3F92C5",
        backgroundColor: "white",
        width: "55%",
        height: 28,
        lineHeight: 1,
        fontSize: 16,
     
    },
    buttonCadastrar:{
        width: 150,
        backgroundColor: "#49B976",
        alignSelf: "center",
        alignItems: "center",
        paddingVertical: 5,
        marginTop: 140
    },

    buttonTexto:{
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    
    })
export default Cadastro