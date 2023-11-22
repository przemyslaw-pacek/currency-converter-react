import './style.css';

const Form = ({ children, onSubmit }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();

        onSubmit();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset className="form">
                {children}
            </fieldset>
        </form>
    );
};

export default Form;