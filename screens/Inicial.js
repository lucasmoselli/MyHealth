
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image} from 'react-native';
import Login from '../components/Login';

const Inicial = (props) => { 

  const goToTelaHome = () =>{
    props.navigation.navigate('Home')
  }

  const goToTelaMudarSenha = () => {
    props.navigation.navigate('MudarSenha')
  }

  const goToTelaCriarConta = () => {
    props.navigation.navigate('Cadastro')
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
      <Login email = "E-mail" senha = "Senha"></Login>  
      <TouchableOpacity style = {styles.buttonEntrar}>
        <Text style = {styles.buttonTexto} onPress = {goToTelaHome}>Entrar</Text>
       </TouchableOpacity>       
      <TouchableOpacity style = {styles.buttonCriarConta}>
        <Text style = {styles.buttonTexto} onPress = {goToTelaCriarConta}> Criar minha Conta</Text>
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
