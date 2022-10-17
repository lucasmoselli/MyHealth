import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
//import DatePicker from 'react-native-date-picker';

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
    vacina: 'SARAMAPO',
    data: '2022-09-21',
    dose: 1,
    urlImage: 'http://',
    proximaVacina: '2024-09-23',
  },
];

const MinhasVacinas = props => {

    const goToCriarVacina = () => {
        props.navigation.navigate('CriarVacina')
    }

  const addVaccine = () => {
    props.navigation.navigate('EditVaccine');
  };


  const handlePress = id => {
    const listaVacinas = ListaVacinas.find(vaccine => {
      return vaccine.id === id;
    });

    Alert.alert(
      'Vaccine detais',
      `Nome da vacina: ${listaVacinas.vacina} \n Dose da vacina: ${listaVacinas.dose}`,
    );
  };

  const deletarVacina = id => {
    Alert.alert('Excluir Vacina', 'Deseja excluir a vacina?', [
        {
            text: 'Sim'
        ,
        onPress(){
            const listaVacinas = ListaVacinas.find(vaccine => {
                return vaccine.id === id;
              });
          
              ListaVacinas = ListaVacinas.filter(Listv => {
                return Listv.id !== listaVacinas.id;
              });
          
              props.navigation.reset({
                index: 3,
                routes: [{name: 'Home'}],
              });
        }
        }, {
            text: 'Não'
        }
    ])
  }


  function Item({id, vacina, dose, data, proximaVacina}) {
    return (
      <TouchableOpacity
        style={styles.containerFlatList}
        onLongPress={() => deletarVacina(id)}
        onPress={() => handlePress(id)}>
        <Text>{vacina}</Text>
        <Text>{dose}</Text>
        <Text>{data}</Text>
        <Image
          style={styles.image}
          source={require('../imagens/comprovante-vacina.png')}
        />
        <Text>{proximaVacina}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={ListaVacinas}
        renderItem={({item}) => (
          <Item
            id={item.id}
            vacina={item.vacina}
            dose={item.dose}
            data={item.data}
            proximaVacina={item.proximaVacina}
          />
        )}
        numColumns={2}
        style={styles.flatlist}
      />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.cadastrar}>
          <Text style={styles.textPassword} onPress = {goToCriarVacina}>Nova vacina</Text>
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
  textPassword: {
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
  body: {
    marginTop: 55,
    height: '100%',
    backgroundColor: '#ADD5D0',
    padding: 15,
  },
  content: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    marginVertical: 10,
  },
  text: {
    height: 40,
    width: 140,
    color: 'white',
    textAlign: 'right',
    paddingRight: 10,
    paddingTop: 10,
  },

  input: {
    width: 218,
    justifyContent: 'center',
    textAlign: 'center',
    height: 40,
    backgroundColor: 'white',
    color: '#3F92C5',
    marginRight: 10,
  },
});

export default MinhasVacinas;