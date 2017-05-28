import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

import imageUploadStyle from '../styles/imageUploadStyle';



module.exports = React.createClass({
    getInitialState(){
        return({
            uploadImg: null,
            image: null,
            images: null

        })
    },



  pickSingleWithCamera(cropping) {
    ImagePicker.openCamera({
    includeBase64: true,
      width: 500,
      height: 500,
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri:  `data:${image.mime};base64,`+ image.data,width: image.width, height: image.height},
        images: null
      });
    }).catch(e => alert(e));
  },

  test(){
    alert('Abrir Galeria');
  },

    async submit(){
        alert('Se ha enviando los Datos');
        let base64 = this.state.image.uri;
        let image = {
            file: base64
        }
        try {
            let response = await fetch('https://api.pwned-2017.ml/upload', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                    body: JSON.stringify(image)
            })
            let responseJson = await response.json()
           console.log(responseJson)
        } catch(error) {
            console.log(error)
        }
    },

    render(){

        return(
            <View style={imageUploadStyle.container}>
                
                    <View>
                        <Text style={imageUploadStyle.titulo}>Titulo</Text>
                        <TextInput style={imageUploadStyle.textInput}></TextInput>
                    </View>
                    
                    <View>
                        <Text style={imageUploadStyle.descripcion}>Descripcion</Text>
                    </View>

                
                    <TextInput style={imageUploadStyle.textInput} multiline={true} numberOfLines={4}>
                    </TextInput>
                
                  
                    <View style={imageUploadStyle.buttonTakePic}>
                        
                        <Button
                            onPress={() => this.pickSingleWithCamera(false)}
                            title="Foto Camara"
                            color="#1a237e"
                        ></Button>
                      
                    </View>

                    <View style={imageUploadStyle.buttonTakePic}>
                    
                        <Button 
                                onPress={() => this.test()}
                                title="Foto Galeria"
                                color="#1a237e"
                        ></Button>

                    </View>

                    
                     <View style={imageUploadStyle.buttonTakePic2}>
                    
                        <Button 
                                onPress={() => this.submit()}
                                title="Enviar"
                                color="#1a237e"
                        ></Button>

                    </View>

                     

                    <View>   
                        <Image style={{width: 70, height: 70, borderRadius: 5}} source={this.state.image}
                        />
                    </View>
               
             </View>   
            )
    }
})

