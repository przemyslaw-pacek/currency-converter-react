import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
    const [clock, setClock] = useState(new Date());

    const formatClock = () =>
        new Date().toLocaleString(undefined, {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });

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
            Dzisiaj jest {formatClock(clock)}
        </p>
    );
};

export default Clock;