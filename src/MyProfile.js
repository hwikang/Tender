import React from 'react';
import faker from 'faker';
import MyDetail from './components/MyDetail';
class MyProfile extends React.Component{
    state = {
        name:'',
        age:'',
        like: '',
        job: '',
        des:'',
        img:'',
    }
    componentDidMount(){
        this.setState({
            like : ['헬스','맥주','피자','사진','독서','SNS'],
            name :"Yunsung Lee",
            age : "32",
            des : "인연을 가볍게 여기지않아요",
            img : faker.image.avatar() ,
            job : 'Jige Car Driver'
        })
    }
    render(){
        return(
            <div>
                <MyDetail  name={this.state.name} age={this.state.age} des={this.state.des} img={this.state.img}
                like = {this.state.like} job={this.state.job}/>
            </div>
        );
    }
}

export default MyProfile;