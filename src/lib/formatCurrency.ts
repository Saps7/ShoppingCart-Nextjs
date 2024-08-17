const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "INR",
    style: "currency",
  });
  
  export default function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number);
  }