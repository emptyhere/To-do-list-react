import React from 'react';

export default class AddItem extends React.Component{

    render(){
    return(
<div>
    <input name='addItem' 
    />
    <button onClick={()=>this.props.onAdd(this.props.itmText)}>Add Item</button>
</div>
    );
    };
};

