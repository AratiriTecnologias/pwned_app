import React, {Component} from 'react';
import {
     TouchableOpacity,
     Text,
     View
} from 'react-native';

import activityStyle from '../styles/activityStyle';
import { firebaseApp } from './auth/config';


class Activity extends Component{

    signOut(){
            firebaseApp.auth.signOut().then(() => {
                  console.log('Adentro de signOut');
                  this.props.navigation.navigate('Login');
            }, (error) =>{
                    console.log(error);
            })
    }


    render(){ 

            return(
                <View style={activityStyle.container}>

                    <View style={activityStyle.linkcontent}>
                        <TouchableOpacity onPress={()=> this.signOut()}>
                            <Text style={activityStyle.link}>
                                Sign out
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={activityStyle.buttonNewQuestion}>
                        <Text style={activityStyle.TextQuestion}>Nuevo</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={activityStyle.buttonRecent} >
                        <Text style={activityStyle.TextRecent}>Recientes</Text>
                    </TouchableOpacity>
                </View>
            )
        }

}

export default Activity;
