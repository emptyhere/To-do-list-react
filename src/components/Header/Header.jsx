import React from 'react';

const Header = ({todoCount, doneCount}) =>{
    return(
        <div>
<h1>Todo-list</h1>
<span>Remaining: {todoCount} </span>
<br/>
<span>Done: {doneCount} </span>
</div>
    );
};

export default Header;