import { useEffect } from "react";

function UseEffectHook(){

    useEffect(() => {
        console.log("rerendered");
    }, []);

    //clean up function. 
    useEffect(() => {
        return () => {
            console.log("unmounted");
        }
    }, []);

    return (
        <p>Hook Example</p>
    )
}

export default UseEffectHook;