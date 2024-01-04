import axios from "axios";

const URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_6fdXdtntZGuUZUAm7tbYEWr6J2JjNvedZhbzYMIh";

export const getApi = async () => {
    try {
        const response = await axios.get(URL);

        return {
            status: "content",
            data: response.data,
        };
    } catch {
        return {
            status: "error",
        };
    }
};