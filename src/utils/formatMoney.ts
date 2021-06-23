const formatBRLMoney = (value = 0) => {
  const fixedValue = value.toFixed(2).replace('.', ',');

  return `R$ ${fixedValue}`;
};

export default formatBRLMoney;
