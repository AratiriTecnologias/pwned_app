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

import { StackNavigator } from 'react-navigation';

import ImageUpload from './src/components/imageUpload';
import Login from './src/components/login';
import Activity from './src/components/activity';


const pwned = StackNavigator({
  Login: {screen: Login},
  ImageUpload: {screen: ImageUpload},
  Activity: {screen: Activity}

})


AppRegistry.registerComponent('pwned', () => pwned);
