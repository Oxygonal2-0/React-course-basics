import React ,{Component} from "react";
// function Student(props){
//     return <h1>Hello {props.name},</h1>;
// }

// const Student = (props) => {
//      return <h1>Hello {props.name},</h1>;
// }

class Student extends Component{
    render(){
        return <h1>Hello {this.props.name},</h1>;
    }
}
// 14/58
export default Student;