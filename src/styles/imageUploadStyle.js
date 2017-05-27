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
        //color: navy,
        //fontSize: 16,
     
        
    },

    descripcion:{
        marginBottom: 20,
        //fontSize: 28,
        //textAlign: 'center',
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
    }


})