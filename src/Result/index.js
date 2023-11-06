import "./style.css";

const Result = ({ title, result }) => (
    <p>
        <span className="title">{title}</span>
        <p className="result">
            {result}
        </p>
    </p>
);

export default Result;