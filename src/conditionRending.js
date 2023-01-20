import React, {Component} from "react";
class User extends Component{
    render()
    {
        const primeMember = true;
        return (
            <div>
                <h1>Welcome {this.props.name}</h1>
                {primeMember && <UserPrime/>}
                <button onClick={this.props.clickData}>Logout</button>
            </div>
        );
    }
}
class UserPrime extends Component{
    render(){
        return <h3>Prime Member</h3>;
    }
}
export default User;