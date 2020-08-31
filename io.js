import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class App extends Component{
    constructor(props){
      super(props)
        this.state
    }
      
    state={
        headline:'BLACKPINK',
        count:1,
    } 
    testState=()=>{
      this.setState({
      headline:'TWICE',   
  })
}
    render(){
      return(
        <View>
          <Text>
            {this.state.headline}
          </Text>
          <Button onPress={this.testState}
          title="iu">

          </Button>
        </View>
      )
    }

}
export default App;