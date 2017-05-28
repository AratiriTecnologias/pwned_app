import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native';

import loginStyle from '../styles/loginStyle';


module.exports = React.createClass({
     getInitialState(){
         return({


         })
     },


    render(){
        return(
            <View style={loginStyle.container}>

                <View>
                    <Text style={loginStyle.titulo}>Nombre</Text>
                </View>
                <TextInput style={loginStyle.input}
                    placeholder='Email'
                    
                />
                <TextInput style={loginStyle.input}
                    placeholder='Password'
                    
                />
                <View style={loginStyle.button}>
                <Button 
                    onPress={this.props.onStartHandler}
                    title="Entrar"
                    color="#1a237e"
                    accessibilityLabel="Learn more about this purple button"
                    ></Button>
                </View>


            </View>
         
              
            
        )
    }
})