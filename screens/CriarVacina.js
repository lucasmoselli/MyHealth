import React, { useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Button} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';


const CriarVacina = () =>{

    const [date, setDate] = useState(new Date())
    const [date2, setDate2] = useState(new Date())
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')
    const [text2, setText2] = useState('')

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
                        value = {date}
                        mode = {'date'}
                        is24Hour = {true}
                        display = "default"
                        onChange={onChange} />
                    )}
                </View>
                <View style = {styles.rotulo}>
                    <Text style = {styles.rotuloTextoEmail}>Vacina</Text>
                    <TextInput style = {styles.rotuloInput}></TextInput>
                </View>
                <View style = {styles.rotulo}>
                    <Text style = {styles.rotuloTextoSenha}>Senha</Text>
                </View>
                <View style = {styles.rotulo}>
                        <Text style = {styles.rotuloTextoRepetirSenha}>Comprovante</Text>
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
                        value = {date2}
                        mode = {'date'}
                        is24Hour = {true}
                        display = "default"
                        onChange={onChange2} />
                    )}
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
        marginTop: 140
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