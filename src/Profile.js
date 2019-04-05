import React from 'react';
import './Profile.css';


class Profile extends React.Component{
    render(){
        return (
            <div>
                <header id='header' style={{backgroundColor:'#febbbb'}}>
                <img class="ui avatar image" src="/images/wireframe/square-image.png"></img>
                나의 프로필 <i class="eye icon"></i>
                </header>
                <div class="ui top attached tabular menu">
                <div class="active item ">Tab</div>
                <div class="active2 item ">Tab2</div>
                </div>
                <div class="ui bottom attached active tab segment">
                <p>ddd</p>
                <p>ssss</p>
                </div>
                <div class="ui bottom attached active2 tab segment">
                <p>aa</p>
                <p>ss</p>
                </div>
           

                
            </div>
        )
    }   
}
export default Profile;