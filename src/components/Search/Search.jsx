import React from 'react';


export default class Search extends React.Component{
    state={
       searchData: ''
    }

    onSearchCh = (e) => {
    const searchData = e.target.value;
    this.setState({searchData});
    this.props.onSearchCh(searchData);
    };
    
    render(){
    return(
        <div>
        <input placeholder='Search' 
        onChange={this.onSearchCh} 
        value ={this.state.searchData}
        />
         </div>
    );
    };
};

