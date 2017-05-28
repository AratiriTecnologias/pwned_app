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
        padding: 40
    },

    input:{
        backgroundColor: white,
        height: 50,
        borderColor: black,
        borderWidth: 1,
        borderRadius: 5,
        margin: 2,
        textAlign: 'center'
    },

    titulo:{
        color: navy,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },

    button:{
        marginTop: 10
    },

    feedback:{
        textAlign: 'center'
    }

})
