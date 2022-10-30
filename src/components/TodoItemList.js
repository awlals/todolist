import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {



  shouldComponentUpdate(nextProps, nextState){
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
      ({id, text, checked}) => (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}   //jsxㅎ형식의 타입을 반환즁 (map 쓰는중 )
        />
      )
    );


    // const arr = [
    //   <h1>test1</h1>,
    //   <h1>test2</h1>
    // ]

    return (
      <div>
        {/* {arr.map(e=>{
          debugger
          return e
        })} */}
        {todoList}    
      </div>
    );
  }
}

export default TodoItemList;