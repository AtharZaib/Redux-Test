import React, { Component } from "react";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";

class ListRender extends Component {
  constructor(props) {
    super(props)
    this.state = {
      List = [
        {
          id: 1,
          name: "Amy Farha",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          subtitle: "Vice President"
        },
        {
          id: 2,
          name: "Chris Jackson",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "Vice Chairman"
        },
        {
          id: 3,
          name: "Danny Morisson",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "Vice Author"
        }
      ]
    };
  }

  renderRow ({ item }) {
    return (
      <ListItem
        roundAvatar
        title={item.name}
        subtitle={item.subtitle}
        avatar={{uri:item.avatar}}
      />
    )
  }
  render() {
    return (
      <View>
          {this.renderRow()}
      </View>
    );
  }
}

export default ListRender;
