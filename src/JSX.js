import React from "react";
import "./App.css";

const name = "Oxygonal";
function show(name)
{
    return name;
}

let user = {
    firstname : "Virat"
}

const el = 
<div>
    <h1 className = "bg">Hello {name} {show("Ramesh")} {user.firstname}, {10 + 20}</h1>
</div>;
// export default el; 

const NewJXS = (props) =>
{
    return (
        <div>
            <h1>Hello , </h1>
            <h1>Your Roll No  </h1>
        </div>
    );
};



export default NewJXS; 

