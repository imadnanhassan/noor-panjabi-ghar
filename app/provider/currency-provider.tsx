"use client";

import React, { createContext, useContext } from "react";
import { useAppSelector, useAppDispatch } from "./hook";
import { setSelectedCurrency, Currency } from "./features/currency-slice";

interface CurrencyContextType {
  currencies: Currency[];
  selectedCurrency: Currency;
  setCurrency: (code: string) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const { currencies, selectedCurrency } = useAppSelector(
    (state) => state.currency
  );

  const setCurrency = (code: string) => {
    dispatch(setSelectedCurrency(code));
  };

  return (
    <CurrencyContext.Provider
      value={{ currencies, selectedCurrency, setCurrency }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
