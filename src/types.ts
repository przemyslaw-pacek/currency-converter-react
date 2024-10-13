export interface Data {
  status: "loading" | "success" | "error";
  data: {
    [key: string]: {
      code: string;
      value: number;
    };
  };
  meta: {
    last_updated_at: string;
  };
}

export interface ResultDetails {
  inputAmount: number;
  inCurrency: string;
  outputAmount: number;
  outCurrency: string;
}
