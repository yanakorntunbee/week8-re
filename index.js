import React,{Component}from 'react';
import { View, Text} from 'react-native';
import Login from './component/login';
import Home from './component/home'

class App extends Component{
  constructor(props){
    super(props)
      this.state={
        name:'ton',
      }
  }
  render(){
    const hee="lisa"
    const Hpp5="j9"
    return(
    <View>
      <Text>{this.state.name}</Text>
      <Login lol={Hpp5}/>
      <Home k10={hee}/>
    </View>
    )
  }
}
export default App;