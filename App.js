
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserForm from './src/views/UserForm';
import UserList from './src/views/UserList';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { UsersProvider } from './src/context/UsersContext';



const Stack = createNativeStackNavigator()

export default function(props) {

  return(
  <UsersProvider>
    <NavigationContainer>

    <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
    <Stack.Screen 
    name="UserList" 
    component={UserList}
    options={({navigation}) => {
      return {
        title: "Lista de Usuários",
        headerRight: () => ( 
           <Button
           onPress={() => navigation.navigate("UserForm")}
            type="solid"
            icon={<Icon name="add" size={25} color="white"></Icon>}
          ></Button>
        )
      }
    }}
    ></Stack.Screen>
      
    <Stack.Screen 
     name="UserForm" 
     component={UserForm}
     options={{
       title: "Formulário de Usuários"
     }}
     ></Stack.Screen>
      
    </Stack.Navigator>





    </NavigationContainer>



    </UsersProvider>
  )
  
}
const screenOptions = {
  headerStyle: {
    backgroundColor: "#f45111"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
}

//1 poar de chaves szerve para interoplaar 2 par de chaves serve paara criar objeto