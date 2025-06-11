import React from 'react';
import { useTranslation } from 'react-i18next';
import {exchangeRates, localeToCurrency } from '../../utils/exchangeRates';
import { currencyFormat} from '../../utils/currencyFormat';

interface PriceCardProps {
  amount: number; }



const PriceDisplay: React.FC<PriceCardProps> = ({ amount }) => {
  const { i18n } = useTranslation("membership");

  const currentLocale = i18n.language;
  const currency = localeToCurrency[currentLocale] || 'USD';
  const rate = exchangeRates[currency] ?? 1;
  const convertedAmount = amount * rate;

  const formattedPrice = currencyFormat(convertedAmount, currency, currentLocale);
  

  return (
    <>
    <span >{formattedPrice}</span>
    </>
  );
};

export default PriceDisplay;
