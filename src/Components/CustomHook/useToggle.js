import { useState } from "react";

function useToggle(initialValue = false) {

    const [isOn, setIsOn] = useState(initialValue);

    const toggle = () => {
        setIsOn(previousValue => !previousValue);
    };

    const turnOn = () => {
        setIsOn(true);
    };

    const turnOff = () => {
        setIsOn(false);
    };

    return {
        isOn,
        toggle,
        turnOn,
        turnOff
    };
}

export default useToggle;