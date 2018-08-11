/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, AppRegistry, TextInput} from 'react-native';
import Header from '../components/Header';
// import SocketIOClient from 'socket.io-client';
const ioClient = require('socket.io-client');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this._emit_message = this._emit_message.bind(this);
    this.state = { text: 'プレホル'}
  }
  _emit_message() {
    var socket_client = ioClient.connect('http://localhost:3003');
    socket_client.json.emit('save_bindString_req', {
      message: 'テスト'
    });
    socket_client.on('save_bindString_res', function() {
      console.log('テスト完了');
    });
  }
  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray' ,borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}/>
        <Button
          onPress={this._emit_message}
          title="おしてね"></Button>
      </View>
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
