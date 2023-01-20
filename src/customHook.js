import React, {useState} from "react";
function UseCustomCounter()
{
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    return {count, handleIncrement};
}

function CustomHook()
{
    const data = UseCustomCounter();
    const data1 = UseCustomCounter();
    return <React.Fragment>
        <h1>Count up : {data.count}</h1>
        <button onClick={data.handleIncrement}>Increment</button>
        <h1>Count up : {data1.count}</h1>
        <button onClick={data1.handleIncrement}>Increment</button>
    </React.Fragment>
}
export default CustomHook;