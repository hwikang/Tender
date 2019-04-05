import React from 'react';
import './PersonDetail.css';
const PersonDetail = (props) =>{
    //ui container two column centered grid
    const like = props.like
    console.log('like=',like)
    
    const createLikeBtn = (likeArr) =>{
        console.log("likearr=",likeArr)
        let likeBtn = '';
        if(likeArr !== null &&likeArr !== ''  ){
            likeBtn = likeArr.map( like => {
            return <button className="ui basic button likeBtn">{like}</button>
        
         });
         console.log(likeBtn)
        }

        return likeBtn
    }
    
    return(  
        <div className="ui container two column centered grid" id="cardbody">
        <div className="ui card column">
            <div className="card ">
                <div className="content">
                    <div className="header">{props.name}</div>
                    <div className="meta">{props.age}</div>
                    <div className="meta">{props.job}</div>
                </div>
                <div className="extra content">
                    <div>
                       
                        {createLikeBtn(props.like)}
                    </div>                        
                </div> 
                <div className="extra content">
                    <div>
                        <hr/>
                        <div className="description">{props.des}</div>
                    </div>                        
                </div> 
                
                <div className="extra content">
                    <div className="ui four buttons">
                        <div className="ui animated fade green button">
                            <div className="hidden content">Refresh</div>
                            <div className="visible content">
                                <i className="redo icon"></i>
                            </div>                            
                        </div>
                        <div className="ui animated fade blue button">
                            <div className="hidden content">Good</div>
                            <div className="visible content">
                                <i className="thumbs up outline icon"></i>
                            </div>                            
                        </div>
                        <div className="ui animated fade red button">
                            <div className="hidden content">Fuck</div>
                            <div className="visible content">
                                <i className="thumbs down outline icon"></i>
                            </div>                            
                        </div>
                        <div className="ui animated fade yellow button">
                            <div className="hidden content">Scouter</div>
                            <div className="visible content">
                                <i className="binoculars icon"></i>
                            </div>                            
                        </div>
                                            
                     
                    </div>
                </div>  
                
                <div className="extra content">
                    <div className="image">
                        <img src={props.img} alt="userImage" id="profileImage"/>
                    </div>                    
                </div>   
                
            </div>  
        </div>
        </div>
    )
}

export default PersonDetail;