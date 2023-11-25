import "./style.css";

const Clock = ({ text, clock }) => (
    <p className="clock">
        {text}<span>
            {clock = (new Date()).toLocaleString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "long",
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            })}
        </span>
    </p>
);

export default Clock;