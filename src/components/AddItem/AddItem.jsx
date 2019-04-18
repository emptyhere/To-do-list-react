import React from 'react';

export default class AddItem extends React.Component{

    state = {
       text: ''
    };

    onTextCh = (e) => {
      this.setState({
          text: e.target.value
      });
    };

    onSubmit = (e) =>{
        e.preventDefault();
        if (this.state.text !== ''){
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
        }
    };

    render(){
    return(
<form onSubmit={this.onSubmit}>
    <input name='addItem' 
    onChange={this.onTextCh}
    value={this.state.text}
    />
    <button>Add Item</button>
</form>
    );
    };
};
