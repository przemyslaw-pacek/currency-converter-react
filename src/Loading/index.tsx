import { Data } from "../types";
import { Alert } from "./styled";

interface LoadingProps {
  ratesData: Partial<Data>;
}

const Loading = ({ ratesData }: LoadingProps) => (
  <>
    {ratesData.status === "loading" && (
      <Alert $loading>
        <p>Ładowanie...</p>
        <p>Pobieranie danych z serwera.</p>
      </Alert>
    )}
    {ratesData.status === "error" && (
      <Alert $error>
        <p>Coś poszło nie tak.</p>
        <p>Brak połączenia z serwerem.</p>
        <p>Spróbuj ponownie!</p>
      </Alert>
    )}
  </>
);

export default Loading;
