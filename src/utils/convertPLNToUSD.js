export const convertPLNToUSD = (PLN) => {

  if(typeof PLN === 'string'){
    return NaN;
  }

  if (PLN < 0 ){
    return '$0.00';
  }

  if (typeof PLN === 'object'){
    return 'Error';
  }

  if (PLN === null){
    return 'Error';
  }

  if (typeof PLN === 'array'){
    return 'Error';
  }

  if (typeof PLN === 'function'){
    return 'Error';
  }

  const PLNtoUSD = PLN / 3.5;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD);
}