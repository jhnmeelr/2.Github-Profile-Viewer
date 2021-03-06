import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Profile from "./github/Profile.jsx";
import Search from "./github/Search.jsx";

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
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({username: null});
                alert(err);
            }.bind(this)
        });
    }
    getUserRepos(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
            dataType: 'json',
            cache: 'false',
            success: function(data){
                this.setState({userRepos: data});
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({username: null});
                alert(err);
            }.bind(this)
        });
    }
    handleFormSubmit(username){
        this.setState({username: username}, function(){
            this.getUserData();
            this.getUserRepos();
        });
    }
    componentDidMount(){
        this.getUserData();
        this.getUserRepos();
    }
    render(){
        return (
            <div>
                <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
                <Profile {...this.state} />
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