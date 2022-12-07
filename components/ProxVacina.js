import { Image, Text, StyleSheet, TouchableOpacity, Dimensions, View} from "react-native"

const ProxVacina = (props) => {

    const { item } = props


    return (
        <View style = {{alignItems: "center", marginTop: 3}}>
        <TouchableOpacity style={styles.containerFlatList}>
        <Text style = {styles.textnome}>{item.nome}</Text>
        <Text style = {styles.text}>{item.data2}</Text>
      </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    containerFlatList: {
        backgroundColor: 'white',
        width: 370,
        margin: 5,
        justifyContent: 'space-between',
        borderRadius: 10,
        height: 53
      },
      textnome:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#3F92C5",
        paddingLeft: 10
      },

      text:{
        fontSize: 16,
        color: "#8B8B8B",
        paddingLeft: 10
      },
      image: {
        flex: 1,
        width: 180,
        height: 80,
      },
})

export default ProxVacina