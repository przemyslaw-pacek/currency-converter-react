import { useState, useEffect } from "react";
import format from "./format";
import "./style.css";

const Clock = ({ text }) => {
    const [clock, setClock] = useState("");

    useEffect(() => {
        const date = new Date();
        const formatClock = date.toLocaleString(undefined, format);

        const intervalClock = setInterval(() => {
            setClock(formatClock);
        }, 1000);

        return () => {
            clearInterval(intervalClock);
        };
    }, [clock]);

    return (
        <p className="clock">
            {text}<span>
                {clock}
            </span>
        </p>
    );
};

export default Clock;