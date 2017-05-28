import {
     StyleSheet,
     Platform
 } from 'react-native';

const navy = '#1a237e';

module.exports = StyleSheet.create({
     
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonNewQuestion:{
        borderWidth: 2,
        borderColor: '#439184',
        padding: 10,
        width: 98,
        marginBottom: 25,

    },


    TextQuestion: {
        fontSize: 18,
        color: navy,
        left: 10
    },

    buttonRecent:{
        borderWidth: 2,
        borderColor: '#439184',
        padding: 10,
        marginBottom: 25,
    },

    TextRecent: {
        fontSize: 18,
        color: navy
    },

    link:{
        color: navy
    },
    linkcontent:{
        marginBottom: 25
    }

 })