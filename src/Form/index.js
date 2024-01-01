import { Field } from "./styled.js";

const Form = ({ children }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <Field>{children}</Field>
        </form>
    );
};

export default Form;