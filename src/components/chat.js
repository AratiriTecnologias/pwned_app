/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { firebaseApp } from './auth/config';

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {messages: []}
    this.onSend = this.onSend.bind(this)
  }

  componentWillMount() {
    this.getMessages()
      .then((res) => {
        this.setState({
          messages: res
        })
      }).catch((err) => {
        const error = AppAPI.handleError(err);;
      })
  }

  getMessages = () => {
      return new Promise((resolve, reject) => {
        const chatRef = firebaseApp.database().ref(`/messages`);
        chatRef.on('value', (snap) => {
          // get children as an array
          var items = [];
          snap.forEach((child) => {
            items.push({
              _id: child.val()._id,
              text: child.val().text,
              user: child.val().user,
              question_id: child.val().question_id
            });
          });
          resolve(items)
        });
      });
  }

  onSend(messages = []) {
    const chatRef = firebaseApp.database().ref(`/messages`);
    let message = messages[0]
    chatRef.push({
      _id: '123',
      question_id: '-KlFRe_18p1RtdyHJdr8',
      text: message.text,
      user: {_id: 123, avatar: 'ninguno.png', name: 'Pedro'}
    })
    console.log(JSON.stringify(messages[0]))
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });

    // let message = {
    //   email: this.email,
    //   displayName: this.displayName,
    //   text: this.chatBox,
    //   created: new Date().toISOString()
    // };
    // this.af.database.list('/messages/' + data)
    //  .push(message).then(response => {
    //     this.chatBox = "";
    //     this.isSubmited = false;
    //     this.content.scrollToBottom();
    //   }).catch((err) => {
    //     this.isSubmited = false;
    //     console.log("catch: ");
    //     console.log(err);
    //   });
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
