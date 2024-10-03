import { useState, useEffect } from "react";
import { getApi } from "./api";

export const useCurrencies = () => {
  const [data, setData] = useState({
    status: "loading",
  });

  const getData = async () => {
    try {
      const data = await getApi();

      setData({
        status: "content",
        data,
      });
    } catch {
      setData({
        status: "error",
      });
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(getData, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return data;
};
