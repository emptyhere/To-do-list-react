import React from 'react';

export default class AddItem extends React.Component{

    render(){
    return(
<div>
    <input/>
    <button onClick={()=>this.props.onAdd('he')}>Add Item</button>
</div>
    );
    };
};

