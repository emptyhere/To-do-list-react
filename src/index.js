import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './components/ToDoList/ToDoList';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import AddItem from './components/AddItem/AddItem';
import ItemFilter from './components/ItemFilter/ItemFilter';


class App extends React.Component{  
    
   genId = 1;
   state= { todoDate:[
        this.createItemData('kek'),
        this.createItemData('kekus'),
        this.createItemData('keksum'),
],

        searchData:'',
        filt: 'all'
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

   onSearchCh = (searchData) =>{
        this.setState({searchData});
   };

   onFiltCh= (filt) =>{
    this.setState({filt});
};

   search(items, searchData){
    if(searchData.length === 0){
        return items;
    }

    return items.filter((item) => {
        return item.text.toLowerCase()
        .indexOf(searchData.toLowerCase()) > -1;
    });
   };

   filt(items, filt){
       switch(filt){
           case 'all':
            return items;
           case 'active':
            return items.filter((item)=> !item.done);
           case 'done':
            return items.filter((item)=> item.done);
           default: 
            return items;            

       }
   };


render(){
    const {todoDate, searchData, filt} = this.state;
    const visibleItems = this.filt(
        this.search(todoDate, searchData), filt);

    const doneCount = todoDate
    .filter((el)=>el.done).length;

    const todoCount = todoDate.length - doneCount;

    return(
<div>
    <Header todoCount={todoCount} doneCount={doneCount} />
    <ItemFilter 
    filt={filt}
    onFiltCh={this.onFiltCh}
     />
    <Search onSearchCh={this.onSearchCh}/>
    <Todolist todoDate={visibleItems} 
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
