import React from 'react';
import BottomTabs from './components/bottomTabs/bottomTabs';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <BottomTabs />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea"
  },
 
});

export default App