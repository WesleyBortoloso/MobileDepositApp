import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ListProducts from "./src/screens/ListProducts";
import InsertProducts from './src/screens/InsertProducts'


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListProducts,
    Insert: InsertProducts
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Projeto Final",
      headerTitleStyle:{
        color: 'white'
      },
      headerStyle: {
        height: 80,
        backgroundColor: '#6200ee'
      }
    }
  }
);

export default createAppContainer(navigator);
