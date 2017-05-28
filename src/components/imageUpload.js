import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Button,
    Alert
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

import imageUploadStyle from '../styles/imageUploadStyle';



module.exports = React.createClass({
    getInitialState(){
        return({
            uploadImg: null,
            image: null,
            base64: null,
            images: null,
            text: null,
            question: {
                        image_id: null,
                        author: {_id: "123", displayName: "Ivan"},
                        title : null,
                        description: null,
                        assignee: {_id: "1234", displayName: "Astro"},
                        participants: [
                          {_id : "12345", displayName: "Martin"},
                          {_id :"12345", displayName: "Pablo"}
                        ],
                        status: "open"
                     }

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
        base64: image.data,
        images: null
      });
    }).catch(e => alert(e));
  },

  test(){
    alert('Abrir Galeria');
  },

    async submit(){
        alert('Se ha enviando los Datos');
        let base64 = this.state.base64;
        let image = {
            file: base64
        }
        try {
           if(image.file) {
             let upload_r = await fetch('https://api.pwned-2017.ml/upload', {
                 method: 'POST',
                 headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json',
                 },
                     body: JSON.stringify(image)
             })
             upload_r = await upload_r.json()
             let labels = []
             Object.keys(upload_r.firebase_pub_r.published.Labels).forEach((item)=> {
                console.log(item)
                labels.push(item)
             })
             Alert.alert(labels.join(", "))
             this.setState({question: {...this.state.question, image_id : upload_r.firebase_up_r.key}})
           } else {
             this.setState({question: {...this.state.question}})
           }
           let question_r = await fetch('https://api.pwned-2017.ml/question', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                    body: JSON.stringify(this.state.question)
           })
           question_r = await question_r.json()
        } catch(error) {
            console.log(error)
        }
    },

    render(){

        return(
            <View style={imageUploadStyle.container}>

                    <View>
                        <Text style={imageUploadStyle.titulo}>Titulo</Text>
                        <TextInput style={imageUploadStyle.textInput}
                                   onChangeText={(text) => this.setState({question: {...this.state.question, title:text}})}>
                        </TextInput>
                    </View>

                    <View>
                        <Text style={imageUploadStyle.descripcion}>Descripcion</Text>
                    </View>


                    <TextInput style={imageUploadStyle.textInput} multiline={true} numberOfLines={4}
                                      onChangeText={(text) => this.setState({question: {...this.state.question, description:text}})}>
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
