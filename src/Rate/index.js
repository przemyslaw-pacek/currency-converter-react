import "./style.css";

const Rate = ({ title, rate }) => (
    <p>
        <span className="title">
            {title}
            <strong>{rate.toFixed(2)}</strong>
        </span>
        <button className="button">
            Przelicz
        </button>
    </p>
);

export default Rate;