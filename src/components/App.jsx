import React, {Component} from 'react';
import ReactDOM from "react-dom";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'melnykivan',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }
    render(){
        return(
            <div>
                {this.state.username}
            </div>
        )
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

export default App