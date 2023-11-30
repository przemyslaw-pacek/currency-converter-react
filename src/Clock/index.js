import { useState, useEffect } from "react";
import "./style.css";

const formatClock = (clock) => clock.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});

const Clock = () => {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        const intervalClock = setInterval(() => {
            setClock(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalClock);
        };
    });

    return (
        <p className="clock">
            Dzisiaj jest
            {" "}
            {formatClock(clock)}
        </p>
    );
};

export default Clock;