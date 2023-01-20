import React, {Component} from "react";

export default class List extends Component
{
    state = {
        users : [
            {id :101, name:"Rahul", password: "rjgnvfjrnk"},
            {id :102, name:"Sonam", password: "iodis"},
            {id :103, name:"Prince", password: "jknvdnd"},
            {id :104, name:"Oxygonal", password: "dih"}
        ],
        isLoggedIn: false
    }
    render()
    {
        // const arr = [10, 20, 30, 40];

        // <ul>
        //     <li>{arr[0]}</li>
        //     <li>{arr[1]}</li>
        //     <li>{arr[2]}</li>
        //     <li>{arr[3]}</li>
        // </ul>

        // const newArr = arr.map((num) => {console.log(num); return <li>{num*2}</li>;});
        // console.log(arr);
        // console.log(newArr);
        // return <ul>
        //     {newArr}
        // </ul>;
        
        // return <ul>
        //     {arr.map((num) => <li>{num*2}</li>)}
        //     {/* {arr.map((num) => {return <li>{num*2}</li>;})} */}
        // </ul>
        
        const arr = this.props.numbers;
        // return <ul>
        //     {arr.map((num) => <li>{num*2}</li>)}
        // </ul>

        const newUsers = this.state.users.map((user)=>{
            // return <div key={user.id}>
            return <div key={user.id}>
                <h4>ID : {user.id}</h4>
                <h4>Name : {user.name}</h4>
                <h4>Password : {user.password}</h4>
            </div>;
        });
        return (
            <div>
                {/* <h4>ID : {this.state.users[0].id}</h4>
                <h4>Name : {this.state.users[0].name}</h4> */}
                {newUsers}
            </div>
        )
        
    }
}