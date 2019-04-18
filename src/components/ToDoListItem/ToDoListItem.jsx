import React from 'react';
import styles from './ToDoListItem.module.css';

export default class TodolistItem extends React.Component {




    render(){
     const {text, onDlt, onChDone, onChImp, done,
    important} = this.props;
     


        let classNames = styles;
        if (done){
            classNames = ` ${styles.done} `;
        }
       
        if (important){
            classNames +=` ${styles.test} `;
        }
        


        return(
            <span>
            <span onClick={onChDone} className={classNames} >
            {text}
            </span>

            <button onClick={onChImp}>Mark Import</button>
            <button onClick={onDlt}>Delete</button>
            </span>
        );
    };
};
