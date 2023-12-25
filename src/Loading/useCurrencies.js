import axios from "axios";
import { useState, useEffect } from "react";

const URL = "currency-converter-react/currencies.json";
//https://api.currencyapi.com/v3/latest?apikey=cur_live_6fdXdtntZGuUZUAm7tbYEWr6J2JjNvedZhbzYMIh

export const useCurrencies = () => {
    const { data, setData } = useState({
        status: "loading",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(URL);

                setData({
                    status: "content",
                    data: response.data,
                });
            } catch (error) {
                console.error(error);
                setData({
                    status: "error",
                    data,
                });
            }
        };

        setTimeout(() => {
            getData();
        }, 1000);
    });

    return { data }
}