import { Field } from "./styled.js";

const Form = ({ children, onSubmit }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();

        onSubmit();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <Field>{children}</Field>
        </form>
    );
};

export default Form;