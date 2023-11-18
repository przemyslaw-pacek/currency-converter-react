import "./style.css";

const Rate = ({ title, rate, count }) => (
    <label>
        <span className="title">
            {title}
            <strong>{rate.toFixed(2)}</strong>
        </span>
        <button onClick={count} className="button">
            Przelicz
        </button>
    </label>
);

export default Rate;