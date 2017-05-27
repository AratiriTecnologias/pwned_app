/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ImageUpload from './src/components/imageUpload';

export default class pwned extends Component {
  render() {
    return (
        <ImageUpload />
    );
  }
}


AppRegistry.registerComponent('pwned', () => pwned);
