import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface CurrencyState {
  currencies: Currency[];
  selectedCurrency: Currency;
}

const currencies: Currency[] = [
  { code: "BDT", name: "Bangladeshi Taka", symbol: "৳" },
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "MUR", name: "Mauritian Rupee", symbol: "₨" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$" },
];

const initialState: CurrencyState = {
  currencies,
  selectedCurrency: currencies[0], // Default to BDT
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setSelectedCurrency: (state, action: PayloadAction<string>) => {
      const currency = state.currencies.find((c) => c.code === action.payload);
      if (currency) {
        state.selectedCurrency = currency;
      }
    },
  },
});

export const { setSelectedCurrency } = currencySlice.actions;
export default currencySlice.reducer;
