import React from 'react';
import styles from './ToDoListItem.module.css';

export default class TodolistItem extends React.Component {

state = {
    done: false,
    important: false
};

    onClickText=()=> {
        this.setState(({done}) => {
            return{
            done: !done
            };
        });
 };

 onClickImportant=()=>{
     this.setState(({important})=>{
         return{
             important: !important
         };
     });
 };

    render(){
     const {text} = this.props;
     const {done, important} = this.state;


        let classNames = styles;
        if (done){
            classNames = ` ${styles.done} `;
        }
       
        if (important){
            classNames +=` ${styles.test} `;
        }
        


        return(
            <span>
            <span onClick={this.onClickText} className={classNames} >
            {text}
            </span>

            <button onClick={this.onClickImportant}>Mark Import</button>
            <button>Delete</button>
            </span>
        );
    };
};
