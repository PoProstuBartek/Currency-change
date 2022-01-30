export const convertPLNToUSD = (PLN) => {

  if(typeof PLN === 'string' || PLN === null){
    return NaN;
  }

  if (typeof PLN !== 'number'){
    return 'Error';
  }

  if (PLN < 0){
    return 0;
  }

  const PLNtoUSD = PLN / 3.5;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD);
}