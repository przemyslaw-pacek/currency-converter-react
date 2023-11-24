import "./style.css";

const Clock = ({ title, clock }) => (
    <p className="clock">
        {title}<span>
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