import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
         <Text>Hello World</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/* 
<div> -------> <view>
<p> <h1> ----> <text>
<button> ----> <TouchableOpacity>

*/
