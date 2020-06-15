import React, { useReducer, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

//성능  최적화 편?

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: 1,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos,action){
  switch(action.type){
    //새로 추가할때
    case "INSERT": {
      type: 'INSERT',todo{id:1,text:'todo',checked:false}
    }
    return todos.concat(action.todo)
   case 'REMOVE':{
    type:"REMOVE",id:1
  }
  return todos.filter(todo=>todo.id !== action.id)
  case 'TOGGLE' : {
    type:'REMOVE',id:1
  } return todo.map(todo=> todo.id === action.id?{...todo,checked:!todo.checked}:todo)
  default:
    return todos;
}
}

const App2 = () => {
  const [todos,dispatch] =useReducer(todoReducer,undefined,createBulkTodos)

  const nextId = useRef(2501);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch({type:'INSERT',todo})
      nextId.current += 1; //nextId 1씩 더하기
    },
    [],
  );
  const onRemove = useCallback((id) => {
    dispatch({type:'REMOVE',id})
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({type:'TOGGLE',id})
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App2;
