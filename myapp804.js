import React,{Component}from 'react';
import { View, Text} from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
      this.state={
        name:'ton',
      }
  }
  render(){
    let ton = "benz"
    return(
    <View>
      <Text>{this.state.name}</Text>
      <Text>{ton}</Text>
    </View>
    )
  }
}
export default App;