import React from 'react';
import TodolistItem from '../ToDoListItem/ToDoListItem';

export default class Todolist extends React.Component{

  render(){

    const {todoDate, onDlt, onChImp, onChDone} = this.props;

    const toDoElements = todoDate.map((item) =>{
    const {id} = item;

        return (
          <li key={id} className='list-group-item'>
            <TodolistItem {...item}
            onDlt={()=>onDlt(id)}
            onChImp={()=>onChImp(id)}
            onChDone={()=>onChDone(id)}
            />
          </li>
        );
      });
      
          return(
        <ul className='list-group'> 
          {toDoElements}
        </ul>
          );
  }
}




