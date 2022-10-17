import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, FlatList, Image} from 'react-native'


export let ListaVacinas = [
    {
      id: 1,
      vacina: 'BCG',
      data: '2022-09-21',
      dose: 1,
      urlImage: 'http://',
      proximaVacina: '2023-09-21',
    },
    {
      id: 2,
      vacina: 'Tetano',
      data: '2022-09-20',
      dose: 1,
      urlImage: 'http://',
      proximaVacina: '2025-05-20',
    },
    {
      id: 3,
      vacina: 'Dengue',
      data: '2022-09-19',
      dose: 1,
      urlImage: 'http://',
      proximaVacina: '2024-09-23',
    },
    {
      id: 4,
      vacina: 'COVID-19',
      data: '2022-03-03',
      dose: 1,
      urlImage: 'http://',
      proximaVacina: '2024-03-03',
    },
    {
      id: 5,
      vacina: 'POLIO',
      data: '2022-09-21',
      dose: 1,
      urlImage: 'http://',
      proximaVacina: '2024-09-23',
    },
    {
      id: 6,
      vacina: 'SARAMPO',
      data: '2022-09-21',
      dose: 1,
      urlImage: 'http://',
      proximaVacina: '2024-09-23',
    },
  ];
  

const ProximasVacinas = (props) =>{
    
    const goToTelaCriarVacinas = () => {
        props.navigation.navigate('CriarVacina')
    }

    function Item({ vacina, proximaVacina}) {
        return (
          <TouchableOpacity
            style={styles.containerFlatList}>
            <Text style = {styles.textoVacina}>{vacina}</Text>
            <Text style = {styles.proxVacina}>{proximaVacina}</Text>
          </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
          <FlatList
            data={ListaVacinas}
            renderItem={({item}) => (
              <Item
                id={item.id}
                vacina={item.vacina}
                proximaVacina={item.proximaVacina}
              />
            )}
            key = {1}
            numColumns={1}
            style={styles.flatlist}
          />
          <View style={styles.buttons}>
            <TouchableOpacity onPress={goToTelaCriarVacinas}
              style={styles.cadastrar}>
              <Text style={styles.textoCadastrar}>Nova vacina</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 3,
        backgroundColor: '#ADD5D0',
      },
      flatlist: {
        flexDirection: 'column',
      },
      buttons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      cadastrar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#49B976',
        width: 166,
        height: 40,
        elevation: 5,
      },
      textoCadastrar: {
        fontSize: 16,
        color: 'white',
      },

      textoVacina:{
        marginBottom: 5,
        marginLeft: 8,
        color: "#3F92C5",
        fontSize: 20,
        fontWeight: "bold"
      },

      proxVacina: {
        marginBottom: 5,
        marginLeft: 8,
        fontSize: 16
      },

      containerFlatList: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 5,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderRadius: 4,
      },

})


export default ProximasVacinas