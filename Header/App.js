import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "react-native/Libraries/NewAppScreen";
import Detail from  "./assets/componet/screens/Detail";
import TodoApp from "./assets/componet/screens/Todo";
import { Button, Image } from "react-native";




function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/icon.png')}
    />
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="TodoApp" component={TodoApp} 
options={{title: "P2P",
headerStyle: {
  backgroundColor: '#f4511e',
},
// headerTitleStyle:{
//   fontSize: 100,
//   fontWeight:50,
// },
headerRight:()=>(
  <Button title="Lod out"/>
)
}}/>
<Stack.Screen name="Detail" component={Detail} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
/>


</Stack.Navigator>
    </NavigationContainer>
  )
}