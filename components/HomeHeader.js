import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

const HomeHeader = (props) =>{


    return(
        <View style = {styles.body}>
            <TouchableOpacity>
                <View style = {styles.hamburguer}>
                    <View style = {styles.hamburguerRetangulo}></View>
                    <View style = {styles.hamburguerRetangulo}></View>
                    <View style = {styles.hamburguerRetangulo}></View>
                </View>
            </TouchableOpacity>
                <Text style = {styles.titulo}>Minhas vacinas</Text>
        </View>
    )
}
const styles = StyleSheet.create({
body:{
    flexDirection: "row",
    backgroundColor: "#C1E7E3",
    height: 60
},

imagem:{
    top: 5,
    width: 40,
    height: 40,
    margin: 10

  },
  titulo:{
    color: "#419ED7",
    fontSize: 32,
    fontFamily: "Averia Libre",
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10

  },

  hamburguer:{
    flexDirection: "column",
    marginTop: 8

  },

  hamburguerRetangulo:{
    backgroundColor: "#ADD5D0",
    width: 40,
    height: 4,
    marginTop: 9,
    marginLeft: 14
  }

})

export default HomeHeader