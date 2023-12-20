import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const todoList = () => {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text } });
    setText('');
  };

  return (
    <View>
      <TextInput value={text} onChangeText={setText} />
      <Button title="Add Todo" onPress={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
            <Button title="Delete" onPress={() => dispatch({ type: 'REMOVE_TODO', payload: item.id })} />
          </View>
        )}
      />
    </View>
  );
};

export default todoList;
