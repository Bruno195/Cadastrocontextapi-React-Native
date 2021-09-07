import React, { useContext } from 'react'
import { Text, View, FlatList, Alert } from "react-native"
import { Avatar, ListItem } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

 

export default props => {


    const {state, dispatch} = useContext(UsersContext)

    function confirmarUserDelete(user){
        Alert.alert("Excluir Usuário", "Deseja excluir o usuário?", [
            {
                text: "Sim",
                onPress(){
                    dispatch({
                        type: "deleteUser",
                        payload: user
                    })
                }
            },
            {
                text: "Não"
            }
        ])
    }



    function getUserItem({ item }) {
        return (
            <ListItem
                bottomDivider

                onPress={() => props.navigation.navigate('UserForm')}

            >
                <Avatar rounded title={item.name[0]} source={{ uri: item.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />

                <Icon
                   
                    size={18}
                    raised
                    name='pencil'
                    type='font-awesome'
                    color='orange'
                    onPress={() => props.navigation.navigate('UserForm', item)}

                />
                <Icon
                    size={18}
                    raised
                    name='trash'
                    type='font-awesome'
                    color='red'
                    onPress={() => confirmarUserDelete(item)} />
            




                </ListItem >
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            >

            </FlatList>
        </View>
    )

}

//props is a object, dois atributos insisde props
//inside props we have access a atribbute called navigation, redux gerencimaneto de state of my application
