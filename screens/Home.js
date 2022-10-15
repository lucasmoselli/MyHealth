
import React from "react";
import { View, StyleSheet} from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer";
import MinhasVacinas from "./MinhasVacinas";
import MyDrawer from "../components/MyDrawer";
import ProximasVacinas from "./ProximasVacinas";
import CriarVacina from "./CriarVacina";

const Drawer = createDrawerNavigator()

const Home = (props) =>{
    return(
        <Drawer.Navigator 
            screenOptions={{drawerInactiveTintColor: "#ADD5D0" ,drawerActiveTintColor:"#ADD5D0",drawerLabelStyle: {marginLeft: 30, fontSize: 20, color: "#419ED7"},headerStyle: {backgroundColor: "#C1E7E3"}, headerTintColor: "#419ED7", }}
            drawerContent={(props) => <MyDrawer {...props}></MyDrawer>}>
            <Drawer.Screen name = "Minhas Vacinas" component={MinhasVacinas}></Drawer.Screen>
            <Drawer.Screen name = "Criar Vacina" component={CriarVacina} ></Drawer.Screen>
            <Drawer.Screen name = "Próximas Vacinas" component={ProximasVacinas} ></Drawer.Screen>

        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({

})
export default Home