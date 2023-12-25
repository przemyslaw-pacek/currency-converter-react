import { Info } from "./styled.js";

const Footer = ({ data }) => {
    const isoDate = Object.values(data.meta);
    const date = new Date(isoDate[0]);
    const format = (item) => item.toLocaleString();

    return (
        <>
            {data.status === "content" && (
                <Info> Kursy walut pobierane są z Europejskiego Banku Centralnego.
                    Aktualne na dzień: <strong>{format(date)}</strong>
                </Info>
            )}
        </>
    );
};

export default Footer;