import React from 'react';
import {View, Text,Button} from 'react-native';

const home=(props)=>{
    return(
        <View>
            <Text style={{fontSize:70,}}>Home Component</Text>

        <Text>{props.k10}</Text>
        <Button title="kick Me"/>
        </View>

    )

}
export default home;