import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './components/ToDoList/ToDoList';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import AddItem from './components/AddItem/AddItem';


class App extends React.Component{  
    
   genId = 1;
   state= { todoDate:[
        this.createItemData('kek'),
        this.createItemData('kekus'),
        this.createItemData('keksum'),
]
   };

   createItemData(text) {
    return{
        text, 
        done: false,
        important: false, 
        id:this.genId++
    };
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



   addItm = (text) => {
this.setState(({ todoDate }) => {

    const newArrSec = [...todoDate
        .concat(this.createItemData(text))
    ];

    return{
        todoDate:newArrSec
     };
    });
   };

   changeProperties(arr, id, prop){

    const idIdx = arr.findIndex((el)=> el.id === id);
    const oldItm = arr[idIdx];
    const newItm = {...oldItm, 
        [prop]: !oldItm[prop]};

    return [
        ...arr.slice(0, idIdx),
        newItm,
        ...arr.slice(idIdx + 1)
       ];
   };

   onChangeImportant = (id) =>{
       this.setState(({todoDate}) => {
           return{
               todoDate: this.changeProperties(todoDate, id, 
                'important')
           };
       });
   };

   onChangeDone = (id) =>{
       this.setState(({todoDate})=>{
        return{
            todoDate: this.changeProperties(todoDate, id, 
             'done')
          };
       });
   };

render(){

    const doneCount = this.state.todoDate
    .filter((el)=>el.done).length;

    const todoCount = this.state.todoDate.length - doneCount;

    return(
<div>
    <Header todoCount={todoCount} doneCount={doneCount} />
    <Search />
    <Todolist todoDate={this.state.todoDate} 
    onDlt={this.dltItm}
    onChImp={this.onChangeImportant}
    onChDone={this.onChangeDone}
    />

    <AddItem onAdd={this.addItm} 
    itmText={'text'}
    />
    
</div>
)
  };   
};


ReactDOM.render(<App />, document.getElementById('root'));
