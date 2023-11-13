import "./style.css";

const Rate = ({ title, rate, count }) => (
    <p className="top">
        <span className="title">
            {title}
            <strong>{rate.toFixed(2)}</strong>
        </span>
        <button onClick={count} className="button">
            Przelicz
        </button>
    </p>
);

export default Rate;