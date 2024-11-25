import axios from "axios";
import { Data } from "../../core/types";

const URL =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_6fdXdtntZGuUZUAm7tbYEWr6J2JjNvedZhbzYMIh";

export const getApi = () =>
  axios<Partial<Data>>(URL).then((response) => response.data);
