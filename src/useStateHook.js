import React, {useState} from "react";
function UseStateHook()
{
    const nameStateVariable = useState("Rahul");
    const [name, setName] = useState("Rahul");
    const [roll, setRoll] = useState(101);
    // const name = nameStateVariable[0];
    // const setName = nameStateVariable[1];
    const handleClick = () => {
        nameStateVariable[1]("Oxygonal");
        setName("Oxygonal");
        setRoll(105);
    }
    return (<React.Fragment>
        <h1>Hello {nameStateVariable[0]}</h1>
        <h1>Hello {name}, {roll}</h1>
        <button type="button" onClick={handleClick}>Hello</button>
    </React.Fragment>);
}

function Hello()
{
    return <h1>Mayur</h1>;
}

export default UseStateHook;