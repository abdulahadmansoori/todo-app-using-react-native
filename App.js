import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Header from './components/header';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { todo: 'Buy a coffee', key: '1' },
    { todo: 'House Cleaning', key: '2' },
    { todo: 'Buying Items', key: '3' },
  ]);
  const onPressHandler = (id) => {
    // if (Alert.prompt('OH', 'ARE YOU SHURE, YOU WANT TO DELETE TASK')) {
    console.log("Delete: " + id);
    setTodos((preTodos) => {
      return preTodos.filter(todo => todo.key != id);
    });
    // }
  }
  const onSubmitHandler = (text) => {
    if (text.length > 5) {
      setTodos((preTodos) => {
        return [{ todo: text, key: Math.random().toString() }, ...preTodos];
      });
      console.log("added: " + text);
    }
    else {
      Alert.alert('OOPS!', 'TASK MUST BE MORE THEN 05 CHARACTERS LONG!!!', [
        { text: "understood", onPress: () => console.log('alert close') }
      ])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Header />

        <View style={styles.content}>
          {/* todo form */}
          <AddTodo onSubmitHandler={onSubmitHandler} />

          <View >
            {/* list */}
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onPressHandler(item.key)}>
                  <Text style={styles.list}> {item.todo} </Text>
                </TouchableOpacity>
              )}
            />

          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    margin: 30,
  },
  list: {
    padding: 10,
    paddingHorizontal: 35,
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: "dashed",
    marginVertical: 5,
    borderRadius: 5,
    fontSize:16
  },
});
