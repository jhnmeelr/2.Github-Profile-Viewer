import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Profile from "./github/Profile.jsx";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'jhnmeelr',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }
    getUserData(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
            dataType: 'json',
            cache: 'false',
            success: function(data){
                this.setState({userData: data});
                console.log(data);
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({username: null});
                alert(err);
            }.bind(this)
        });
    }
    componentDidMount(){
        this.getUserData();
    }
    render(){
        return (
            <div>
                <Profile userData={this.state.userData} />
            </div>
        );
    }
};

App.PropTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string,
};
App.defaultProps = {
    clientId: '039ffc635b9161579a5f',
    clientSecret: 'bbe9b0afc06fa2fc4157b403462f2f4c6c709689',
}

export default App;