import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native';

import loginStyle from '../styles/loginStyle';
import { firebaseApp } from './auth/config';

class Login extends Component{

    constructor(props){
      super(props);
      this.state ={
            uploadImg: null,
            image: null,
            images: null,
            email: '',
            password: '',
            result: ''
      }
   }
  



    static navigationOptions = ({ navigation }) => ({
        title: `Login`,
    });

    render(){
       
        return(
            <View style={loginStyle.container}>
                <Text style={loginStyle.feedback}>{this.state.result}</Text>
                <View>
                    <Text style={loginStyle.titulo}>Nombre</Text>
                </View>
                <TextInput style={loginStyle.input}
                    placeholder='Email'
                    onChangeText={(text)=>this.setState({email: text})}
                />
                <TextInput style={loginStyle.input}
                    placeholder='Password'
                    onChangeText={(text)=>this.setState({password: text})}
                    secureTextEntry={true}
                />

                <View style={loginStyle.button}>
                <Button 
                    onPress={()=> this.props.navigation.navigate('Activity')}
                    title="Entrar"
                    color="#1a237e"
                    ></Button>
                </View>


            </View>
         
            
        )
    }
}

export default Login;