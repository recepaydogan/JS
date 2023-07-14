const kareAlani = (kenar) => kenar ** 2;
const outPut = kareAlani(6);
console.log(outPut);

const name = () => "Recep";

const nameOutPut = name();
console.log(nameOutPut);

const products1 = [10, 20, 30];
const tax1 = 0.25;
const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }

  return total;
};
totalBill = bill(products1, tax1);
console.log(totalBill);
