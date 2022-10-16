import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View, StyleSheet, Text} from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const MyDrawer = (props) => {

    const logout = () => {
        signOut(auth)
        props.navigation.pop()
    }

    return(
        <View style ={{flex: 1, backgroundColor: "#ADD5D0"}}>        
            <DrawerContentScrollView {...props}>
                <View >
                    <Text style = {{margin: 30, alignSelf: "center", fontWeight: "bold", color: "#419ED7", fontSize: 30}}>Olá, Lucas</Text>
                </View>
            <DrawerItemList {...props}/>
            <DrawerItem label = "Sair" onPress={logout}  labelStyle = {{color: "#419ED7", fontWeight: "bold", marginLeft: 30, fontSize: 20}}></DrawerItem>
            </DrawerContentScrollView>
        </View>

    )
}

const styles = StyleSheet.create({

})

export default MyDrawer