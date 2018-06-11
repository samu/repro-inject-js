/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, WebView } from "react-native";

import WKWebView from "react-native-wkwebview-reborn";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    setTimeout(() => {
      console.log("doing stuff");
      this.webView.injectJavaScript(
        `document.getElementById('test').innerHTML = "injection done"`
      );
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <WKWebView
          source={{ html: "<h1>test</h1><h1 id='test'>test</h1>" }}
          ref={ref => (this.webView = ref)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    height: "100%"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
