import axios from "axios";

const URL = "currencies.json"
//"https://api.currencyapi.com/v3/latest?apikey=cur_live_6fdXdtntZGuUZUAm7tbYEWr6J2JjNvedZhbzYMIh";

export const getApi = async () => {
    const response = await axios.get(URL);
    const data = response.data;

    return data;
};