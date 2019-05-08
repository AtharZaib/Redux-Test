import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "redux-thunk";
import store from "./store/index";
import ListRender from "./components/ListRender";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ListRender />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
