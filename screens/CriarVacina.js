import React, { useState, useEffect} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Button, Image, Alert} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import MyHealth from "../components/MyHealth";

import { addDoc, collection, deleteDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import { db, storage} from '../config/firebase.js'

import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";


const CriarVacina = (props) =>{

    const [nomeVacina, setNomeVacina] = useState()
    const [doseVacina, setDose] = useState()
    const [urlFoto, setUrlFoto] = useState()
    const [pathFoto, setPathFoto] = useState()
    const [dataVacina, setDate] = useState(new Date())
    const [dataVacina2, setDate2] = useState(new Date())
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')
    const [text2, setText2] = useState('')

    const goToGPS = () => {
        
    }
    const openImagePicker = () => {
        launchImageLibrary()
        .then((result) =>{
            setUrlFoto(result.assets[0].uri)
        })
    }

    const showCamera = () => {
        launchCamera()
            .then((result) => {
                console.log(result.assets[0].uri)
                setUrlFoto(result.assets[0].uri)

            })
            .catch((error) => {
                console.log("Error: " + error)
            })
    }

    useEffect(() => {
        if (props.route.params?.id) {
            getDoc(doc(db, "vacinas", props.route.params.id))
                .then((result) => {
                    setNomeVacina(result.data().vacina)
                    setText(result.data().data1)
                    setText2(result.data().data2)
                    setUrlFoto(result.data().urlFoto)
                    setPathFoto(result.data().pathFoto)
                })
                .catch((error) => {
                    alert(error)
                })
        }
    }, [])

    const cadastrar = async () => {
        
        const dados = await fetch(urlFoto)
        const blob = await dados.blob()

        const arrayString = urlFoto.split("-")
        const lastIndex = arrayString.length - 1;

        const filename = "images/" + arrayString[lastIndex]

        uploadBytes(ref(storage,filename), blob)
            .then((result)=>{
                getDownloadURL(ref(storage, filename))
                    .then((url) => {
                        addDoc(collection(db, "vacinas"),{
                            vacina: nomeVacina,
                            data1: text,
                            data2: text2,
                            urlFoto: url,
                            pathFoto: filename
                        })
                            .then((result) =>{
                                props.navigation.pop()
                            })
                            .catch((error) =>{
                                alert(error)
                            })
                    })
            })
    }

    const excluir = (id) => {
        Alert.alert('Excluir Vacina', 'Deseja excluir a vacina?', [
            {
                text: 'Sim'
            ,
            onPress(){
                deleteDoc(doc(db, "vacinas", props.route.params.id))
                .then(() =>{
                    props.navigation.pop()
        
                })
                .catch((error) => {
                    alert(error)
                })
            }
        }, {
            text: 'Não'
        }])
    }

    const salvar = async (id) => {

        const dados = await fetch(urlFoto)
        const blob = await dados.blob()

        uploadBytes(ref(storage, pathFoto), blob)
        .then((result) => {
            updateDoc(doc(db, "vacinas", props.route.params.id), {
                vacina: nomeVacina,
                data1: text,
                data2: text2,
                urlFoto: urlFoto,
                pathFoto: pathFoto
            })
            .then(() => {
                props.navigation.pop()
            })
            .catch((error) => {
                alert(error)
            })
        })
    }
    const onChange = (event, selectedDate) => {
        setShow(false)
        setDate(selectedDate)

        let tempDate = new Date(selectedDate)
        let data = tempDate.getDate() + '/'  + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        setText(data)

    }

    const onChange2 = (event, selectedDate2) => {
        setShow(false)
        setDate2(selectedDate2)

        let tempDate = new Date(selectedDate2)
        let data2 = tempDate.getDate() + '/'  + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        setText2(data2)
    }

    const showMode = () => {
        setShow(true)
        
    }
    
    return(
        <View>
            <MyHealth></MyHealth>
            <View style = {styles.body}>
                <View style = {styles.rotulo}>
                    <Text style = {styles.rotuloTextoData}>Data de Vacinação</Text>
                    <View style = {{backgroundColor: "white", height: 35, width: 110, marginRight: 10}}>
                        <Text>{text}</Text>
                    </View>
                    <View style = {styles.buttonData}>
                        <Button style = {styles.buttonDataFormat}title= "Data" onPress={() => showMode()}></Button>
                    </View>
                    {show &&(
                        <DateTimePicker 
                        testID="dateTimePicker"
                        value = {dataVacina}
                        mode = {'date'}
                        is24Hour = {true}
                        display = "default"
                        onChange={onChange} />
                    )}
                </View>
                <View style = {styles.rotulo}>
                    <Text style = {styles.rotuloTextoVacina}>Vacina</Text>
                    <TextInput style = {styles.rotuloInput} value = {nomeVacina} onChangeText = {setNomeVacina}></TextInput>
                </View>
                <View style = {styles.rotulo}>
                    <Text style = {styles.rotuloTextoDose} value = {doseVacina}>Dose</Text>
                </View>
                <View style = {styles.rotulo}>
                    <Text style = {styles.rotuloTextoComprovante} >Comprovante</Text>
                    <Button title = "Foto do Comprovante" onPress={showCamera}></Button>
                    {
                        urlFoto ? 
                        <Image source ={{uri: urlFoto}}/>
                        :
                        null
                    }
                </View>
                <View style = {styles.rotulo}>
                    <Text style = {styles.rotuloTextoEndereço}>Endereço</Text>
                    <Button title = "GPS" onPress={goToGPS}></Button>
                </View>
                <View style = {styles.rotulo}>
                    <Text style = {styles.rotuloTextoData}>Próxima Vacinação</Text>
                    <View style = {{backgroundColor: "white", height: 35, width: 110, marginRight: 10}}>
                        <Text>{text2}</Text>
                    </View>
                    <View style = {styles.buttonData}>
                        <Button style = {styles.buttonDataFormat}title= "Data" onPress={() => showMode()}></Button>
                    </View>
                    {show &&(
                        <DateTimePicker 
                        testID="dateTimePicker"
                        value = {dataVacina2}
                        mode = {'date'}
                        is24Hour = {true}
                        display = "default"
                        onChange={onChange2} />
                    )}
                </View>

                {
                    props.route.params?.id ?
                    <>
                <TouchableOpacity style = {styles.buttonSalvar} onPress = {salvar}>
                    <Text style = {styles.buttonTexto}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttonExcluir} onPress = {excluir}>
                    <Text style = {styles.buttonTexto}>Excluir</Text>
                </TouchableOpacity>
                </>
                :
                <TouchableOpacity style = {styles.buttonCadastrar} onPress = {cadastrar}>
                    <Text style = {styles.buttonTexto}>Cadastrar</Text>
                </TouchableOpacity>

            }
            </View>
        </View>
    )
 }


const styles = StyleSheet.create({
    body:{
        backgroundColor: "#ADD5D0",
        height: 610,
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


    rotuloTextoVacina:{
        justifyContent: "center",
        width: "40%",
        color: "white",
        fontSize: 16,
        paddingLeft: 100
    },

    rotuloTextoDose:{
        justifyContent: "center",
        width: "40%",
        color: "white",
        fontSize: 16,
        paddingLeft: 100
    },

    rotuloTextoComprovante:{
        justifyContent: "center",
        width: "40%",
        color: "white",
        fontSize: 16,
        paddingLeft: 50
    },

    rotuloTextoEndereço:{
        justifyContent: "center",
        width: "40%",
        color: "white",
        fontSize: 16,
        paddingLeft: 80
    },
    rotuloInput:{
        color: "#419ED7",
        backgroundColor: "white",
        width:200,
        height: 35,
        
    },
    buttonCadastrar:{
        width: 150,
        backgroundColor: "#49B976",
        alignSelf: "center",
        alignItems: "center",
        paddingVertical: 5,
        marginTop: 140,
    },

    buttonExcluir:{
        width: 150,
        backgroundColor: "red",
        alignSelf: "center",
        alignItems: "center",
        paddingVertical: 5,
        marginBottom: 50
    },

    buttonSalvar:{
        width: 150,
        backgroundColor: "#49B976",
        alignSelf: "center",
        alignItems: "center",
        paddingVertical: 5,
        marginTop: 100,
        marginBottom:50
    },

    buttonTexto:{
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    
    buttonData: {
        width: "20%",
    },

    buttonDataFormat:{
    }
})
export default CriarVacina