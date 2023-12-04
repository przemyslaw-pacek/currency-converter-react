import { useState, useEffect } from "react";
import { MyClock } from "./styled.js";

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
        <MyClock>
            Dzisiaj jest
            {" "}
            {formatClock(clock)}
        </MyClock>
    );
};

export default Clock;