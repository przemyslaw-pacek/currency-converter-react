import axios from "axios";
import { useState, useEffect } from "react";

export const useCurrencies = () => {
    const { data, setData } = useState({
        status: "loading",
        data: null
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("currencies.json");

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

        getData();
    });

    return [data]
}