import React from 'react';

export default class ItemFilter extends React.Component{

    btns = [
        {name: 'all', text: 'All'},
        {name: 'active', text: 'Active'},
        {name: 'done', text: 'Done'}

    ];

    render(){
        const {filt, onFiltCh} = this.props;

        const btns = this.btns.map(({name, text}) => {
            const isActive = filt === name;
            const clas = isActive ? 'btn-active':'btn-deactive';
            return(
                <button
                type='button'
                className={clas}
                key={name}
                onClick={()=> onFiltCh(name)}
                >{text}</button>
            );
        });

        return(
            <div>
              {btns}
            </div>
        );
    }
}