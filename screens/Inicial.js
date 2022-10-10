
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image} from 'react-native';
import MyInput from '../components/Login';

const Inicial = (props) => { 

  

  const goToTelaMudarSenha = () => {
    props.navigation.navigate('MudarSenha')
  }


  return (
    <View style = {styles.body}>    
      <ImageBackground style = {styles.backgroundVacina} source = {require('../imagens/background-vacina.png')}></ImageBackground>
      <View style = {styles.logo}>
            <Image style ={styles.imagem} source = {require('../imagens/seringa.png')}></Image>
            <Text style = {styles.titulo}>MyHealth</Text>
        </View>
      <View style = {styles.sublogo}>
        <Text style = {styles.subtitulo}>Controle as suas vacinas</Text>
        <Text style = {styles.subtitulo}>e fique seguro</Text>
      </View>
      <MyInput email = "E-mail" senha = "Senha"></MyInput>   
      <TouchableOpacity style = {styles.buttonCriarConta}>
        <Text style = {styles.buttonTexto}> Criar minha Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.buttonNovaSenha}>
        <Text style = {styles.buttonTexto} onPress = {goToTelaMudarSenha}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
    margin: 10
  },

  backgroundVacina:{
    margin: -10,
    position: "absolute",
    width: 430,
    height: 670,
    flex: 0,
    opacity: 0.3,
  },
  logo:{
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center"
  },
  imagem:{
    top: 5,
    width: 50,
    height: 50,

  },
  titulo:{
    color: "#419ED7",
    fontSize: 40,
    fontFamily: "Averia Libre",
    textDecorationLine: "underline"
  },
  sublogo:{
    marginTop: 40,
    marginBottom: 30,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },

  subtitulo:{
    color: "#419ED7",
    fontSize: 30,
    
  },

  buttonTexto:{
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },

  buttonCriarConta:{
    width: 250,
    backgroundColor: "#419ED7",
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 5,
  },

  buttonNovaSenha:{
    width: 250,
    backgroundColor: "#B5C7D1",
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 5,
    marginTop: 50,
  }
})

export default Inicial;
