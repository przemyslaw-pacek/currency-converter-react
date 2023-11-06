import "./style.css";

const Rate = ({ title, rate, result }) => (
    <p className="top">
        <span className="title">
            {title}
            <strong>{rate}</strong>
        </span>
        <button onclick={result} className="button">
            Przelicz
        </button>
    </p>
);

export default Rate;