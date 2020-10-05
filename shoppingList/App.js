import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/3.jpg'}}
          style={styles.img}
        />
      </View>
    </>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 25,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
