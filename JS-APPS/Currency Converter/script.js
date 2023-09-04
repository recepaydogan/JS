const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");
const count = document.getElementById("count");
const equal = document.getElementById("equal");
const exchangeRate = document.getElementById("exchangeRate");

// function updateRate() {
//   fetch(
//     `https://v6.exchangerate-api.com/v6/329a3500da45f970ba22c637/latest/${firstCurrency.value}`
//   ).then((res) =>
//     res.json().then((data) => {
//       console.log(data);
//       const rate = data.conversion_rates[secondCurrency.value];
//       equal.textContent = (count.value * rate).toFixed(2);

//       exchangeRate.textContent = `1 ${firstCurrency.value} ${rate} ${secondCurrency.value}`;
//     })
//   );
// }
update();
function update() {
  const updateRate = async () => {
    let res = await fetch(
      `https://v6.exchangerate-api.com/v6/329a3500da45f970ba22c637/latest/${firstCurrency.value}`
    );
    let data = res.json();
    return data;
  };

  updateRate().then((data) => {
    const rate = data.conversion_rates[secondCurrency.value];
    equal.textContent = (count.value * rate).toFixed(2);
    exchangeRate.textContent = `1 ${firstCurrency.value} = ${rate} ${secondCurrency.value}`;
  });
}

count.addEventListener("input", update);
secondCurrency.addEventListener("change", update);
firstCurrency.addEventListener("change", update);
