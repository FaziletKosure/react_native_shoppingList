import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import uuid from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);
  //Delete Item
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };
  //Add Item
  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}], {
        cancelable: true,
      });
    } else {
      setItems((prevItems) => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
  };
  return (
    <>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
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
