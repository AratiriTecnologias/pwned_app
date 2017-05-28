import React, {Component} from 'react';
import {
     TouchableOpacity,
     Text,
     View
} from 'react-native';

import activityStyle from '../styles/activityStyle';
import { firebaseApp } from './auth/config';


class Activity extends Component{

    static navigationOptions = ({ navigation }) => ({
        title: `Home`,
    });


    render(){ 

            return(
                <View style={activityStyle.container}>

                    <TouchableOpacity style={activityStyle.buttonNewQuestion} onPress={()=> this.props.navigation.navigate('ImageUpload')}>
                        <Text style={activityStyle.TextQuestion}>Nuevo</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={activityStyle.buttonChat} >
                        <Text style={activityStyle.TextRecent}>     Chat</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={activityStyle.buttonRecent} >
                        <Text style={activityStyle.TextRecent}>Recientes</Text>
                    </TouchableOpacity>
                </View>
            )
        }

}

export default Activity;
