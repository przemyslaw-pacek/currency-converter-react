import { Info, Format } from "./styled.js";

const Footer = ({ data }) => {
  const date = new Date(data?.data?.meta.last_updated_at);
  const formatDate = date.toLocaleDateString();

  return (
    <>
      {data.status === "content" && (
        <Info>
          Kursy walut pobierane są z Europejskiego Banku Centralnego. Aktualne
          na dzień: <Format>{formatDate}</Format>
        </Info>
      )}
    </>
  );
};

export default Footer;
