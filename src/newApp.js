import React from "react";

const AppNew = () => {
    return (<div>
        <StudentNew name="Mayur"/>
        <StudentNew name="Oxygonal"/>
        <StudentNew name="Ramesh"/>
    </div>);
};

const StudentNew = (props) => {
    return <h1>Hello Rahul, {props.name}</h1>;
};

export default AppNew;