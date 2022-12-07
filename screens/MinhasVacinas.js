import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';
//import DatePicker from 'react-native-date-picker';
import CardVacina from '../components/CardVacina';
import { db } from '../config/firebase';
import { onSnapshot, query, collection } from 'firebase/firestore';


const MinhasVacinas = (props) => {

  const [vacinas, setVacinas] = useState([])
  const [searchString, setSearchString] = useState('')

  const q = query(collection(db, "vacinas"))

  const goToCriarVacina = () => {
    props.navigation.navigate('CriarVacina')
  }

useEffect(() => {
  onSnapshot(q, (result) => {
    const listaVacinas = []
    result.forEach((doc) => {
      listaVacinas.push({
        id: doc.id,
        nome: doc.data().vacina,
        data1: doc.data().data1,
        data2: doc.data().data2,
        urlFoto: doc.data().urlFoto
      })
    })
    setVacinas(listaVacinas)
  })
}, [])


  return (
    <View style={styles.container}>
      <View style = {styles.procurarVacina}> 
        <TextInput style={styles.textInput} value={searchString} onChangeText={setSearchString} placeholder = "PESQUISAR VACINA..."/>
      </View>
    <FlatList style={styles.flatlist}data={vacinas.filter((vacina) =>{
      const total = vacina.nome

      searchArray = searchString.trim().split(" ")

      for(let i = 0; i< searchArray.length; i++){
        if(!total.includes(searchArray[i]))
          return
      }
      return vacina
    }
    )} renderItem={({item}) => <CardVacina navigation={props.navigation} item={item}/>} numColumns = {2} />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.cadastrar}>
          <Text style={styles.textoCadastro} onPress = {goToCriarVacina}>Nova vacina</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#ADD5D0',
  },
  flatlist: {
    height: Dimensions.get('window').height / 2 - 75,
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
  textoCadastro: {
    fontSize: 16,
    color: 'white',
  },
  containerFlatList: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width / 2 - 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: 200,
    height: 80,
  },

  procurarVacina: {
    backgroundColor: "white",
    justifyContent: "center",
    marginVertical: 20,
    marginHorizontal: 20,
    height: 36
  },

  textInput: {
    fontSize: 12,
    color: "#8B8B8B",
  },
});

export default MinhasVacinas;