import { useState, useEffect } from "react";
import { getApi } from "./api";
import { Data } from "../types";

export const useCurrencies = (): Partial<Data> => {
  const [ratesData, setRatesData] = useState<Partial<Data>>({
    status: "loading",
  });

  const getData = async () => {
    try {
      const { data, meta } = await getApi();

      setRatesData({
        status: "success",
        data,
        meta,
      });
    } catch {
      setRatesData({
        status: "error",
      });
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(getData, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return ratesData;
};
