import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Todo = () => {
  const [todos, setTodo] = useState([
    { label: "Check lại code", checked: false },
    { label: "Viết test", checked: false },
    { label: "Viết docs", checked: false },
    { label: "Feature/Upload ảnh", checked: false }
  ]);

  const handleCheck = (index) => {
    const todoClone = [...todos];
    todoClone[index].checked = !todoClone[index].checked;
    setTodo(todoClone);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Việc cần làm</Text>
      {todos.map((todo, index) => (
        <View style={styles.todo} key={index}>
          <CheckBox
            boxType="square"
            value={todo.checked}
            style={{ width: 20, height: 20 }}
            onValueChange={() => handleCheck(index)}
          />
          <Text style={{ marginLeft: 15, textTransform: 'capitalize' }}>{ todo.label }</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginTop: 30
  },
  todo: {
    flexDirection: 'row',
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 30
  }
});

export { Todo };

