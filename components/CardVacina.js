import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions} from "react-native"

const CardVacina = (props) => {

    const { item } = props

    const goToCriarVacina = (id) => {
        props.navigation.navigate('CriarVacina', { id: id })
    }

    return (
        <TouchableOpacity
            style={styles.containerFlatList}
            onPress={() => {goToCriarVacina(item.id)}}>
        <Text style = {styles.textNome}>{item.nome}</Text>
        <View style = {{backgroundColor: "#3F92C5", width: 80, alignItems: "center"}}><Text style = {styles.textDose}>1 dose</Text></View>
        <Text style = {styles.textData1}>{item.data1}</Text>
        <Image
          style={styles.image}
          source={{uri: item.urlFoto}}
        />
        <Text style = {styles.textData2}>Proxima dose: {item.data2}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerFlatList: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width / 2 - 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
      },
      textData1:{
        fontSize: 16,
        fontWeight: "bold",
      },

      textData2:{
        fontSize: 13,
        color: "#FD7979",
      },
      
      textNome:{
        fontSize: 25,
        fontWeight: "bold",
        color: "#419ED7",
      },

      textDose:{
        fontSize: 12,
        color: "#FFFFFF",
        fontWeight: "bold"
      },
      image: {
        flex: 1,
        width: 180,
        height: 80,
      },
})

export default CardVacina