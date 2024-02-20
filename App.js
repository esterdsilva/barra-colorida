import React from 'react';
import { View } from 'react-native';

function App() {
  return (
    <View
      style={{
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          width: '14%',
          height: '70%',
        }}></View>

      <View
        style={{
          backgroundColor: 'yellow',
          position: 'absolute',
          width: '14%',
          height: '70%',
          left: '14%',
        }}></View>
      <View
        style={{
          backgroundColor: 'cyan',
          position: 'absolute',
          width: '14%',
          height: '70%',
          left: '28%',
        }}></View>
      <View
        style={{
          backgroundColor: 'red',
          position: 'absolute',
          width: '14%',
          height: '70%',
          left: '42%',
        }}></View>
      <View
        style={{
          backgroundColor: 'magenta',
          position: 'absolute',
          width: '14%',
          height: '70%',
          left: '55%',
        }}></View>
      <View
        style={{
          backgroundColor: 'blue',
          position: 'absolute',
          width: '14%',
          height: '70%',
          left: '68%',
        }}></View>
      <View
        style={{
          backgroundColor: 'green',
          position: 'absolute',
          width: '19%',
          height: '70%',
          left: '82%',
        }}></View>
    </View>
  );
}
export default App;
