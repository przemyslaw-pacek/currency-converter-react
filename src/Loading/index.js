import { useCurrencies } from "./useCurrencies.js";
import { Alert } from "./styled.js";

const Loading = () => {
    const { data } = useCurrencies();

    return (
        <>
            {data.status === "loading" && (
                <Alert loading>
                    Ładowanie...
                    Pobieranie danych z Europejskiego Banku Centralnego.
                </Alert>
            )}
            {data.status === "error" && (
                <Alert error>
                    Coś poszło nie tak.
                    Brak połączenia z internetem.
                    Spróbuj ponownie!
                </Alert>
            )}
        </>
    );
};

export default Loading;