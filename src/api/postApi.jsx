import axios from "axios";

const api = axios.create({
  baseURL:
    "https://v6.exchangerate-api.com/v6/(YourKey)thapaTechnical(YourKey)",
});

// we need to crate a  get request
export const currencyConverter = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};
