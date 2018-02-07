import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
// Import the reducer and create a store
import { reducer } from './src/reducers/todoListRedux';
// Import the App container component
import App from './src/components/App';

// Pass the store into the Provider
class AppWithStore extends Component {
  render() {
    // Add the autoRehydrate middleware to your redux store
    const store = createStore(reducer, undefined, autoRehydrate());

    // Enable persistence
    //persistStore(store) // pakai ini
    persistStore(store, { storage: AsyncStorage }); // agar saat direload data masih ada

    return (
      <Provider store={store}>
        <App />
      </Provider>
      );
  }
}

export default AppWithStore;
