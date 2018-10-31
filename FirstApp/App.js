/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ProgressBarAndroid} from 'react-native';
import {Image} from 'react-native';
 
import WebView from 'react-native-android-fullscreen-webview-video';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const isMobile = Platform.select({ios: "IOS", android: "Android"});
let mainUrl = { uri: 'http://m.denple.com/dsp/' }

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);

    this.state = {isDone : false};

    setInterval(() => {
        this.setState(previusState => {
          let isDoneState = {isDone : !previusState.isDone}
            return isDoneState
        })

    },2000);
  }


  render() {
     let isDoneString = this.state.isDone ? "로딩 완료!!" : "로딩 중..";
     let isDone= this.state.isDone;  

    return (
        <View style={styles.container}>
        <Text style={styles.welcome}> Cross 플랫폼 전환</Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={isDone}
          progress={0.5}
        />
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}> i'am {isMobile}</Text>
        <WebView source={mainUrl} style={styles.webView}/>
        
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
  webView: {
    flex: 1,
    marginTop: 20,
    width: 360,
   
  },

});
