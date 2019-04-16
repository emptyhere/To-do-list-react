import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './components/ToDoList/ToDoList';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import AddItem from './components/AddItem/AddItem';


class App extends React.Component{  
    
   genId = 10;
   state= { todoDate:[
        {text: 'lolus',  id:1},
        {text: 'kekus',  id:2},
        {text: 'testum',  id:3}
]
   };

   dltItm = (id) => {
this.setState(({ todoDate }) => {
const idIdx = todoDate.findIndex((el)=> el.id === id);

const newArr = [...todoDate.slice(0, idIdx),
     ...todoDate.slice(idIdx + 1)
    ];

return{
    todoDate: newArr
      };
    });
   };

   addItm = (text,id) => {
this.setState(({ todoDate }) => {
    
    const newArrSec = [...todoDate.slice()
        .concat({text: 'testum',  id:this.genId++})
        
    ];

    return{
        todoDate:newArrSec
    };
});
console.log(this.genId);
console.log(this.state);
   };

render(){
    return(
<div>
    <Header />
    <Search />
    <Todolist todoDate={this.state.todoDate} onDlt={this.dltItm} />
    <AddItem onAdd={this.addItm} />
</div>
)
};
    
};


ReactDOM.render(<App />, document.getElementById('root'));
