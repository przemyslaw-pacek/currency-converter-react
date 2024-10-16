import { Data } from "../types";
import { Info, Format } from "./styled";

interface FooterProps {
  ratesData: Partial<Data>;
}

const Footer = ({ ratesData }: FooterProps) => {
  const formatDate = ratesData.meta?.last_updated_at
    ? new Date(ratesData.meta.last_updated_at).toLocaleDateString()
    : "";

  return (
    <>
      {ratesData.status === "success" && (
        <Info>
          Kursy walut pobierane są z Europejskiego Banku Centralnego. Aktualne
          na dzień: <Format>{formatDate}</Format>
        </Info>
      )}
    </>
  );
};

export default Footer;
