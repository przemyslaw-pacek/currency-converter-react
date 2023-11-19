import "./style.css";

const Result = ({ title, result }) => (
    <p>
        <span className="title">{title}</span>
        <strong className="result">
            {result ? `${result.resultAmount.toFixed(2)} ${result.symbolCurrency}` : null}
        </strong>
    </p>
)

export default Result;