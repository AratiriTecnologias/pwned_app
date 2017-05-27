import React from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

import imageUploadStyle from '../styles/imageUploadStyle';

module.exports = React.createClass({

    render(){
        return(
         <View style={imageUploadStyle.container}>
            
                <View>
                    <Text style={imageUploadStyle.titulo}>Titulo</Text>
                </View>
                
                <View>
                    <Text style={imageUploadStyle.descripcion}>Descripcion</Text>
                </View>

             
                <TextInput style={imageUploadStyle.textInput}
                               multiline={true}
                               numberOfLines={4}
                >
                </TextInput>
               

                 <View style={imageUploadStyle.upload}>
                    <Text>Subir Foto</Text>
                </View>

            </View>
        )
    }
})

