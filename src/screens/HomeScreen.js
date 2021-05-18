import React, { useState } from "react";
import firebase from '../../database/firebase';
import { SafeAreaView ,Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert } from "react-native";

const HomeScreen = (props) => {

  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');

 async function login() {

    const user = firebase.db.collection('users');
    const snapshot = await user.get();

    snapshot.forEach(doc => {
      if(doc.id == email && doc.data().password == password){
        props.navigation.navigate('List')
    }
    })
}
  return (
    <>
    <SafeAreaView
      style={{
        paddingTop: 40,
        alignContent: "center"
      }} 
    >
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(password) => setPassword(password)} 
      />
      <TouchableOpacity style={styles.container} onPress= {() => props.navigation.navigate('List')} >
        <Text style={styles.text}>ENTRAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
   </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    paddingLeft: 10,
    margin: 12,
    marginTop: 30,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1
  },
  container: {
    flex: 0,
    alignItems: "flex-end",
  },
  text: {
    backgroundColor: '#6200ee',
    color: '#DDDDDD',
    fontWeight: 'bold',
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 20,
    marginRight: 20
  }
})

export default HomeScreen
