
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../redux/actions'; // Import actions

const TodoList = () => {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text) {
      const newTodo = { id: Date.now(), text: text };
      dispatch(addTodo(newTodo));
      setText('');
    }
  };

  const handleRemoveTodo = id => {
    dispatch(removeTodo(id));
  };

  return (
    <View>
      <TextInput value={text} onChangeText={setText} placeholder="Enter a todo" />
      <Button title="Add Todo" onPress={handleAddTodo} />

      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
            <Text>{item.text}</Text>
            <Button title="Remove" onPress={() => handleRemoveTodo(item.id)} color="red" />
          </View>
        )}
      />
    </View>
  );
};

export default TodoList;
