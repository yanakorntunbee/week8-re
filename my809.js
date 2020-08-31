import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
class App extends Component{
    render(){
      return(
        <View style={styles.container}>
          <View style={styles.box1}>
            <Text style={styles.text1}>IU</Text>
          </View>

          <View style={styles.box2}>
            <Text style={styles.text1}>LISA</Text>
          </View>

          <View style={styles.box3}>
            <Text style={styles.text1}>MINA</Text>
          </View>

        </View>
      )
    }
}
const styles = StyleSheet.create({
  container:{
    alignItems:'stretch',
    flex:1,
    justifyContent:'center',
  },
  box1:{
    flex:1,
    backgroundColor:'red',
  },
  box2:{
    flex:1,
    backgroundColor:'blue',
  },
  
  box3:{
    flex:1,
    backgroundColor:'yellow',
  },
  text1:{
    fontSize:20,
  },
})
export default App;