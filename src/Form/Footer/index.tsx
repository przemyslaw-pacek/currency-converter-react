import { Data } from "../../core/types";
import { Info, Format } from "./styled";

interface FooterProps {
  ratesData: Partial<Data>;
}

const Footer = ({ ratesData }: FooterProps) => {
  const formatDate = ratesData.meta?.last_updated_at
    ? new Date(ratesData.meta.last_updated_at).toLocaleDateString()
    : "";

  return (
    <Info>
      Kursy walut pobierane są z Currency API.
      <br />
      Aktualne na dzień: <Format>{formatDate}</Format>
    </Info>
  );
};

export default Footer;
