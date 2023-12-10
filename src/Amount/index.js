import { Title } from "../GlobalStyle.js"
import { Input } from "./styled.js";

const Amount = ({ title, amount, setAmount }) => (
    <p>
        <label>
            <Title>{title}</Title>
            <Input
                required type="number"
                step="0.01"
                min="0.01"
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
            />
        </label>
    </p>
);

export default Amount;