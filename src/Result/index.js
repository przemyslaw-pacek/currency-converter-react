import "./style.css";

const Result = ({ title, result }) => (
    <label>
        <span className="title">{title}</span>
        <p className="result">
            {result ? `${result.resultAmount.toFixed(2)} ${result.symbolCurrency}` : null}
        </p>
    </label>
)

export default Result;