import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Todo = () => {
  const [todos, setTodo] = useState([
    { label: "work 1", checked: false },
    { label: "work 2", checked: false },
    { label: "work 3", checked: false },
    { label: "work 4", checked: false }
  ]);

  const handleCheck = (index) => {
    const todoClone = [...todos];
    todoClone[index].checked = !todoClone[index].checked;
    setTodo(todoClone);
  };

  return (
    <View>
      {todos.map((todo, index) => (
        <View>
          <CheckBox
            boxType="square"
            value={todo.checked}
            style={{ width: 20, height: 20 }}
            hideBox
            onValueChange={() => handleCheck(index)}
          />
          <Text>{ todo.label }</Text>
        </View>
      ))}
    </View>
  );
};

export { Todo };

