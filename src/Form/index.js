import './style.css';

const Form = ({ children }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();

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