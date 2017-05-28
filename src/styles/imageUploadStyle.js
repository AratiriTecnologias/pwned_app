import {
     StyleSheet,
     Platform
 } from 'react-native';

const blue = '#90caf9';
const navy = '#1a237e';
const white = '#fff';
const black = '#000';

module.exports = StyleSheet.create({
     
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'


    },

    titulo:{
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center'

        //color: navy,
        //fontSize: 16,
     
     
        
    },

    descripcion:{
        fontWeight: 'bold',
        marginTop: 17,
        marginBottom: 15,
        color: '#656656'        
    },

    textInput:{
        backgroundColor: white,
        height: 50,
        width: 250,
        borderColor: black,
        borderWidth: 1,
        borderRadius: 5,
        margin: 2,
        textAlign: 'center'
    },

    upload:{
        marginBottom: 200,
        marginTop: 20,
    },

     buttonTakePic:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
     },

     buttonTakePic2:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 50,
        
    }
    //   buttonSubmitPic:{

    //     marginBottom: 160,
    //     paddingRight: 150,  
    //     marginTop: 10
        
    // }



})

