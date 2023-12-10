import { Title } from "../GlobalStyle.js"
import { Button } from "./styled.js";

const Rate = ({ title, rate }) => (
    <p>
        <Title>
            {title}
            <strong>{rate.toFixed(2)}</strong>
        </Title>
        <Button>Przelicz</Button>
    </p>
);

export default Rate;