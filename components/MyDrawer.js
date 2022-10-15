import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View, StyleSheet, Text} from "react-native";

const MyDrawer = (props) => {
    return(
        <View style ={{flex: 1, backgroundColor: "#ADD5D0"}}>        
            <DrawerContentScrollView {...props}>
                <View style = {{}}>
                    <Text style = {{margin: 30, alignSelf: "center", fontWeight: "bold", color: "#419ED7", fontSize: 30}}>Olá, Lucas</Text>
                </View>
            <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        </View>

    )
}

const styles = StyleSheet.create({

})

export default MyDrawer