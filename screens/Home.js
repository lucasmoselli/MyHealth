
import React from "react";
import { View, StyleSheet} from 'react-native'
import HomeHeader from "../components/HomeHeader";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MinhasVacinas from "./MinhasVacinas";
import MyDrawer from "../components/MyDrawer";

const Drawer = createDrawerNavigator()

const Home = (props) =>{
    return(
        <Drawer.Navigator  
            screenOptions={{headerStyle: {backgroundColor: "#C1E7E3"}, headerTintColor: "#419ED7", }}
            drawerContent={(props) => <MyDrawer {...props}></MyDrawer>}>
            <Drawer.Screen name = "Minhas Vacinas" component={MinhasVacinas} ></Drawer.Screen>

        </Drawer.Navigator>
    )
}

export default Home