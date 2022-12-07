
import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, TextInput} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const Inicial = (props) => { 

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()


  const autenticarUsuario = () =>{
    signInWithEmailAndPassword(auth, email, senha)
    .then( () =>{
      console.log('wee')
      props.navigation.navigate('Home')
    })
    .catch( (error) => {
      console.log(error)
    })
  }

  const goToMenu = () => {
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
      <View style = {styles.login}>
            <View style = {styles.loginFlex}>
                <Text style = {styles.rotuloTexto}>E-mail</Text>
                <TextInput value = {email} style = {styles.rotuloInput} placeholder = "Digite seu e-mail" onChangeText={setEmail}></TextInput>
            </View>
            <View style = {styles.loginFlex}>
                <Text style = {styles.rotuloTexto}>Senha</Text>
                <TextInput value = {senha} style = {styles.rotuloInput} secureTextEntry={true} onChangeText={setSenha}></TextInput>
            </View>
        </View>  
      <TouchableOpacity style = {styles.buttonEntrar}>
        <Text style = {styles.buttonTexto} onPress = {autenticarUsuario}>Entrar</Text>
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
  },
  
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
})

export default Inicial;
