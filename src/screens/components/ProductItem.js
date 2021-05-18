import React from "react";
import { Text, StyleSheet, View, Image,TouchableOpacity} from "react-native";
import { List } from "react-native-paper";


const ProductItem = (props) => {
  return (
      <List.Item
        title={props.product.name}
        description={props.product.description}
        right={(paperProps) => 
        <View style={styles.close}>
          <TouchableOpacity style={styles.icon} onPress={() => props.removeProduct(props.product.id)}>
            <img src="/close(1).png" alt="" />
          </TouchableOpacity>  

        </View>
      }
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginTop: 20,
    
  },
  icon:{
    marginTop:12,
    paddingLeft:25
  },
  close:{
    flex:1,
    flexDirection:"row",
    paddingLeft:25
  },
});

export default ProductItem;