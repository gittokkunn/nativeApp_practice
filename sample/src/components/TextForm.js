import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
const ioClient = require('socket.io-client');


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
type Props = {};

var send_text = '';
export default class TextForm extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { text: ''}
  }
  _set_text(text) {
    send_text = text
  }
  _emit_message() {
    var socket_client = ioClient.connect('http://localhost:3003');
    socket_client.json.emit('save_bindString_req', {
      message: send_text
    });
    socket_client.on('save_bindString_res', function() {
      console.log(send_text + '送信完了');
    });
  }
  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray' ,borderWidth: 1}}
          onChangeText={(text) => this._set_text(text)}
          value={send_text}/>
        <Button
          onPress={this._emit_message}
          title="送信"></Button>
      </View>
    );
  }
}
