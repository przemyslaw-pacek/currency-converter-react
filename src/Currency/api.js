import axios from "axios";

const URL =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_6fdXdtntZGuUZUAm7tbYEWr6J2JjNvedZhbzYMIh";

export const getApi = () => {
  return axios.get(URL).then((response) => response.data);
};
