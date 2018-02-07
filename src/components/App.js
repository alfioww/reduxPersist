import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { actionCreators } from '../reducers/todoListRedux';
import List from './List';
import Input from './Input';
import Title from './Title';

class App extends Component {

  onAddTodo = (tekt) => {
    const { dispatch } = this.props;

    dispatch(actionCreators.add(tekt));
  }

  onRemoveTodo = (tekt) => {
    const { dispatch } = this.props;

    dispatch(actionCreators.remove(tekt));
  }

  render() {
    const { todo } = this.props;

    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          lists={todo}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  todo: state.todos, // todo bisa diubah, tetapi todos tidak boleh ini dari file todoListRedux.js
});

export default connect(mapStateToProps)(App);
