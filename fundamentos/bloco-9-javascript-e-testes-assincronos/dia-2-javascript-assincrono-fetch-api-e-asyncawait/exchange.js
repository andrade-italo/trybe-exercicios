const API_URL = "https://api.coincap.io/v2/assets?limit=10";

const fetchFiat = async () => {
    const fiatApi = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json`
    const usdCurrencies = await fetch(fiatApi)
      .then((response) => response.json())
      .then((data) => data.usd)
      .catch((error) => error.toString());
  
    return usdCurrencies.brl;
  };

const addCrypto = async (cryptoArray) => {
    const brlPrice = await fetchFiat()
  const cryptoList = document.getElementById("cryptoList");
  const newArray = Object.values(cryptoArray.data);
  newArray.forEach(({ name, symbol, priceUsd }) => {
    const li = document.createElement("li");
    li.innerText = `${name} (${symbol}):  R$ ${(brlPrice * Number(priceUsd)).toFixed(2)}`;
    cryptoList.appendChild(li);
  });
};

const fetchCrypto = async () => {
  await fetch(API_URL)
    .then((exchange) => exchange.json())
    .then((cryptoArray) => addCrypto(cryptoArray))
    .catch((error) => error.toString());
};

window.onload = async () => await fetchCrypto()