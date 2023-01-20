import React, {useState, useEffect} from "react";

function UseEffect()
{
    const [count, setCount] = useState(101);
    const [count1, setCount1] = useState(150);
    const handleClick = () => {
        setCount(count + 1);
    }
    const handleClickDown = () => {
        setCount1(count1 - 1);
    }
    useEffect(()=>
        {console.log("Use Effect Called")},
        [count]
    );
    return (<React.Fragment>
        <h1>Count Up : {count}</h1>
        <h1>Count Down : {count1}</h1>
        <button type="button" onClick={handleClick}>Increment</button>
        <button type="button" onClick={handleClickDown}>Decreament</button>
    </React.Fragment>);
}
export default UseEffect;
