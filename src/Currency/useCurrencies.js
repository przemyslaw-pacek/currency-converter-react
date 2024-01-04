import { useState, useEffect } from "react";
import { getApi } from "./api";

export const useCurrencies = () => {
    const [data, setData] = useState({
        status: "loading",
    });

    const getData = async () => {
        setData(await getApi());
    };

    useEffect(() => {
        setTimeout(getData, 1000);
    }, []);
    
    return data;
};