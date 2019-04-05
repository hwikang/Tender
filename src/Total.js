import React from 'react';
import Match from './Match';
import Profile from './Profile';
import "semantic-ui-css/semantic.min.css"
class Total extends React.Component{
    render(){
        return(
            <div className="ui grid">
                <div id="edit" className="five wide column">
                <Profile/>

                </div>
                <div  className="eleven wide column">
                <Match />   
                </div>
            </div>
           
        )
    }
}

export default Total;