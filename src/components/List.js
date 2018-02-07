import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class List extends Component {

  renderItem = (teks, it) => {
    const { onPressItem } = this.props;

    return (
      <ScrollView>
      <TouchableOpacity
        style={styles.item}
        onPress={() => onPressItem(it)}
      >
        <Text>{teks}</Text>
      </TouchableOpacity>
      </ScrollView>
    );
  }

  render() {
    const { lists } = this.props;

    return (
      <View>
      <ScrollView>
        {lists.map(this.renderItem)}
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  },
});
