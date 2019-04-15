import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './components/ToDoList/ToDoList';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

const App = (props) => {
    const todoDate = [
        {text: 'lolus',  id:1},
        {text: 'kekus',  id:2},
        {text: 'testum',  id:3}
];


    return(
<div>
    <Header />
    <Search />
    <Todolist todoDate={todoDate} />
</div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));
