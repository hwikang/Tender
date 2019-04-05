import React from 'react';
import Match from './Match';
import MyProfile from './MyProfile'
class Total extends React.Component{
   state= {
       bigScreen: 'match'  // 현재 보여줄 페이지를 뜻함
   }
    MyProfileClick = (e) =>{
    
       this.setState({bigScreen:'myprofile'})
    } 
    
    
    render(){
       // const myProfile = document.querySelector("#myProfile");
       // const bigScreen = document.querySelector("#bigScreen");
        var bigScreen = <Match/>;   //어떤걸 빅스크린에 보여줄지
        if(this.state.bigScreen==='match'){
            bigScreen =  <Match/>;     
        }else if(this.state.bigScreen==='myprofile'){
            bigScreen = <MyProfile/>;
        }
        return(
            <div className="ui grid">
            <div id="edit" className="five wide column">
                <button id="myProfile" onClick={this.MyProfileClick}>MyProfile</button>

            </div>
            <div className="eleven wide column" id="bigScreen">
            {/* match or profile */}
                {bigScreen}               
            </div>
        </div>
           
        )
    }
}

export default Total;