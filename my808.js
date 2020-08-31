import React, {Component} from 'react';
import {View, Text} from 'react-native';
class App extends Component{
    render(){
      return(
        <View style={{
          alignItems:'stretch',
          flex:1,
          justifyContent:'center',
        }}>
          <View style={{
            flex:1,
            backgroundColor:'red',
          }}>
            <Text style={{
              fontSize:20,
            }}>IU</Text>
          </View>




          <View style={{
            flex:1,
            backgroundColor:'blue',
          }}>
            <Text style={{
              fontSize:20,
            }}>IU</Text>

            </View>

            <View style={{
            flex:1,
            backgroundColor:'yellow',
          }}>
            <Text style={{
              fontSize:20,
            }}>IU</Text>
          </View>


        
        </View>
      )
    }
}
export default App;