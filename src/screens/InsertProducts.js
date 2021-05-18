import React, { useState } from "react";
import firebase from "../../database/firebase";
import { SafeAreaView ,Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const InsertProducts = (props) => {

  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')


  async function newProduct(){

    const res = await firebase.db.collection("products").add({
      name: productName,
      description: productDescription
    });
    props.navigation.navigate('List')

}
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        onChangeText={(productName) => setProductName(productName)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do Produto"
        onChangeText={(productDescription) => setProductDescription(productDescription)} 
      />
      <TouchableOpacity style={styles.container} onPress= {() => newProduct()} >
        <Text style={styles.text}>CADASTRAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
export default InsertProducts
