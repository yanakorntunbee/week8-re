import React, {Component} from 'react';
import {View, Text} from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
      this.state={
        blackpink:'ice screem',
        benz:'lisa',
      }
  }
    render(){
      return(
        <View>
          <Text>{this.state.blackpink}</Text>
          <Text>{this.state.benz}</Text>
        </View>
      )
    }

}
export default App;