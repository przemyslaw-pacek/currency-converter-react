import { Legend } from "./styled";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => <Legend>{title}</Legend>;

export default Header;
