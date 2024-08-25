// utils/formatPrice.ts

const formatPrice = (price: number, currency: string = 'IDR', locale: string = 'id-ID'): string => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  export default formatPrice;