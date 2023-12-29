import { useCurrencies } from "./useCurrencies.js";
import { Alert } from "./styled.js";

const Loading = () => {
    const data = useCurrencies();

    return (
        <>
            {data.status === "loading" && (
                <Alert loading>
                    <p>Ładowanie...</p>
                    <p>Pobieranie danych z serwera.</p>
                </Alert>
            )}
            {data.status === "error" && (
                <Alert error>
                    <p>Coś poszło nie tak.</p>
                    <p>Brak połączenia z serwerem.</p>
                    <p>Spróbuj ponownie!</p>
                </Alert>
            )}
        </>
    );
};

export default Loading;