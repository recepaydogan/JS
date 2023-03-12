let ad = "recep";
let soyAd = "Aydopan";
let yas = "40";
let sehir = "Manisa";

//ternary operators
let emekilik =
  65 - yas > 0
    ? "Emekiliğe " + (65 - yas) + " Yıl Kaldı."
    : "Zaten Emekli Oldunuz";

let mesaj = `Benim adım ${ad} ve soyadım ${soyAd}. ${sehir}'de yaşıyorum. ${emekilik} `;
console.log(mesaj);
