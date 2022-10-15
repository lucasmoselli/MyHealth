import React from "react";
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native'




const ProximasVacinas = () =>{
    const goToTelaCriarVacinas = () => {
        props.navigation.navigate('CriarVacina')
    }

    return(
        <View >
            <View style = {styles.body}>
                <TouchableOpacity style = {styles.buttonCadastrarVacina}>
                    <Text style = {styles.buttonText} onPress = {goToTelaCriarVacinas}>Nova Vacina</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor: "#ADD5D0",
        height: 610,
        justifyContent: "flex-end",
        alignItems: "center"
    },

    buttonCadastrarVacina:{
        marginBottom: 90,
        width: 150,
        paddingVertical: 5,
        backgroundColor: "#49B976",
        alignSelf: "center",
        alignItems: "center",

        
    },

    buttonText:{
        color: "white",
        fontWeight: "bold",
        fontSize: 15

    },
})
export default ProximasVacinas