import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity
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

   pickSingleBase64(cropit) {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      includeBase64: true
    }).then(image => {
      console.log(image);
      this.setState({
        image: {uri: `data:${image.mime};base64,`+ image.data, width: image.width, height: image.height},
        images: null
      });
    }).catch(e => alert(e));
  },

    submit(){
        
        let base64 = this.state.image.uri;
        let image = {
            file: base64
        }

        fetch('https://api.pwned-2017.ml/upload', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
                body: JSON.stringify(image)
        }).then(res => console.log(res.json()))
          .then(data => console.log(data));
    },


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
                
                  <TouchableOpacity onPress={() => this.pickSingleWithCamera(false)} >
                    <Text >Select Single With Camera</Text>
                </TouchableOpacity>

            <TouchableOpacity onPress={() => this.pickSingleBase64(false)}>
                <Text >Select Single Returning Base64</Text>
            </TouchableOpacity>
                    
                 <View >   
                     <Image style={{width: 50, height: 50}} source={this.state.image}
                />
                </View>

             
                <TouchableOpacity onPress={() => this.submit()}>
                    <Text>Subir</Text>
                </TouchableOpacity>

               
             </View>   
            )
    }
})

