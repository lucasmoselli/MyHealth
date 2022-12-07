import React, {useState, useEffect}from "react";
import { View, StyleSheet, TouchableOpacity, Text, FlatList, Image} from 'react-native'
import { db } from "../config/firebase";
import { onSnapshot, query, collection } from "firebase/firestore";
import ProxVacina from "../components/ProxVacina";
const ProximasVacinas = (props) =>{
    
    const goToTelaCriarVacinas = () => {
        props.navigation.navigate('CriarVacina')
    }

    const [vacinas, setVacinas] = useState([])

    const q = query(collection(db, "vacinas"))

    useEffect(() => {
      onSnapshot(q, (result) => {
        const listaVacinas = []
        result.forEach((doc) => {
          listaVacinas.push({
            id: doc.id,
            nome: doc.data().vacina,
            data1: doc.data().data1,
            data2: doc.data().data2,
          })
        })
        setVacinas(listaVacinas)
      })
    }, [])
    

    return (
        <View style={styles.container}>
          <FlatList
            data={vacinas}
            renderItem={({item}) => 
              <ProxVacina navigation = {props.navigation} item = {item}/>
            }
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