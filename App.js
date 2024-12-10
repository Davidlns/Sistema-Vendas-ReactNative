import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppProvider } from "./context/AppContext"; // Importe o provedor de contexto
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TotalScreen from "./screens/TotalScreen";
import ComissaoScreen from "./screens/ComissaoScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Prazo" component={ProfileScreen} />
          <Drawer.Screen name="Total" component={TotalScreen} />
          <Drawer.Screen name="Comissão" component={ComissaoScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
