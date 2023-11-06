import { useState } from "react";
import "./style.css";

const Content = ({ title, amount }) => {
    const [ content, setContent ] = useState()

    const onFormSubmit = (event) => {
        event.preventDefault();
        amount(content());
    };

    return (
        <form onSubmit={onFormSubmit}>
            <span className="title">{title}</span>
            <input
                className="content"
                required type="number"
                step="0.01"
                min="0.01"
                value={content}
                onChange={({ target }) => setContent(target.value)}
            />
        </form>
    );
};

export default Content;