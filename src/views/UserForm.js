import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, Button } from "react-native"
import { TextInput } from 'react-native-gesture-handler'
import UsersContext from '../context/UsersContext'

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext) 
    return (
        <>
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput 
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
            ></TextInput>
        </View>

        <View style={style.form}>
        <Text>Email</Text>
        <TextInput 
            style={style.input}
            onChangeText={email => setUser({...user, email})}
            placeholder="Informe o Nome"
            value={user.email}
        ></TextInput>
        </View> 

        <View style={style.form}>
        <Text>Url do Avatar</Text>
        <TextInput 
            style={style.input}
            onChangeText={avatarUrl => setUser({...user, avatarUrl})}
            placeholder="Informe o Nome"
            value={user.avatarUrl}
        ></TextInput>

        <Button
            title="Salvar"
            onPress={() => {
                dispatch({
                    type: user.id ? 'updateUser' : 'createUser',
                    payload: user
                })
                navigation.goBack()
            }}
        ></Button>


        </View> 

        </>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
})








