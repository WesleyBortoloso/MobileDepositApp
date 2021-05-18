import React, { useEffect, useState } from "react";
import { List } from "react-native-paper";
import { SafeAreaView ,Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ProductItem from './components/ProductItem'
import firebase from "../../database/firebase";
import { FloatingAction } from "react-native-floating-action";
import { FAB } from 'react-native-elements';




const ListProducts = (props) => {

  let [products, setProducts] = useState([])
  const filtered = props.navigation.state.filtered;

  const removeProduct = (id) => {
    db.collection('products').doc(id).delete()
    getProducts()  
}

  useEffect(() => {
    async function getProducts() {
      const productRef = firebase.db.collection('products');
      const snapshot = await productRef.get();
    
      let products = snapshot.docs.map(doc => {
        console.log(doc.data())
        return product = {id: doc.id, ...doc.data()}
      })
      setProducts(products);
    }
    getProducts();
  }, [filtered])

    

  return (
    <>
      <SafeAreaView>

      <TouchableOpacity style={styles.container} onPress= {() => props.navigation.navigate('Insert')}>
        <Text style={styles.text}>  + Novo Produto </Text>
      </TouchableOpacity>

      <FlatList
        style={styles.productsList}
        data={products}
        renderItem={(element) => {
          return (
          <>
            <ProductItem key={element.index} product={element.item} removeProduct={removeProduct} />
          </>
          );
        }}
      />
      </SafeAreaView>
      <FloatingAction
      style={styles.floating}
        onPress= {() => props.navigation.navigate('Insert')
      }
      /> 
    </>
  )
}

const styles = StyleSheet.create({
  floating: {
    backgroundColor: '#6200ee',
  },
  container: {
    flex: 0,
    alignItems: "flex-end"
  },
  text: {
    backgroundColor: '#6200ee',
    color: '#DDDDDD',
    fontWeight: 'bold',
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 20,
    marginRight: 20
  },
  productsList: {
    marginTop: 20,
  },
  icon:{
    marginTop:5
  }
})

export default ListProducts
