import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicial from './screens/Inicial'
import MudarSenha from './screens/MudarSenha'
import Cadastro from './screens/Cadastro'
import Home from "./screens/Home";
import CriarVacina from "./screens/CriarVacina";

const Stack = createNativeStackNavigator()

const App = () => { 

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Inicial" component={Inicial}></Stack.Screen>
        <Stack.Screen name = "Home" component={Home}></Stack.Screen>
        <Stack.Screen name = "Cadastro" component={Cadastro}></Stack.Screen>
        <Stack.Screen name = "MudarSenha" component={MudarSenha}></Stack.Screen>
        <Stack.Screen name = "CriarVacina" component={CriarVacina}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
