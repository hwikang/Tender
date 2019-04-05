import React from 'react';
import Match from './Match';

class Total extends React.Component{
    render(){
        return(
            <div className="ui grid">
            <div id="edit" className="five wide column">
                <p>asdasdasdasd</p>

            </div>
            <div  className="eleven wide column">
             <Match />   
            </div>
        </div>
           
        )
    }
}

export default Total;