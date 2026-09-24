import useToggle from "./useToggle";

function ToggleMessage() {

    const {isOn, toggle, turnOn, turnOff} = useToggle();

    return (
        <div>
            <h2>Toggle Example</h2>

            <button onClick={toggle}>
                {isOn ? "Hide Message" : "Show Message"}
            </button>

            {isOn && (
                <p>
                    Hello! The message is visible.
                </p>
            )}

        </div>
    );
}

export default ToggleMessage;