import './style.css';

const Container = ({ children }) => (
    <fieldset className="container">
        {children}
    </fieldset>
);

export default Container;