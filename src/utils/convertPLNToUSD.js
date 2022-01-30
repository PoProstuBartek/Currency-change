export const convertPLNToUSD = (PLN) => {

  if(typeof PLN === 'string'){
    return NaN;
  }

  if (typeof PLN !== 'number' || PLN === null){
    return 'Error';
  }

  const PLNtoUSD = PLN / 3.5;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  if (PLN < 0){
    return PLN = formatter.format(0);
  } else {
    return formatter.format(PLNtoUSD);
  }
}