import React from 'react';
import BottomTabs from './components/bottomTabs/bottomTabs';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './components/reduxStore/store';

const App = () => {
  return (
    <>
    <Provider store={store}>
        <View style={styles.container}>
          <BottomTabs />
       </View>
       </Provider>
    </>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea"
  },
 
});

export default App