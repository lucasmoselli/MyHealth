import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const MyHealth = () =>{
    return(
        <View style = {styles.body}>
                <Image style ={styles.imagem} source = {require('../imagens/seringa.png')}></Image>
                <Text style = {styles.titulo}>MyHealth</Text>
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

  }

})

export default MyHealth