import './style.css';

const Container = ({ children }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset className="container">
                {children}
            </fieldset>
        </form>
    );
};

export default Container;