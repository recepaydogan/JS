var sayilar = [1, 5, 7, 15, 3, 25];
// for (var i of sayilar) {
//   var sonuc = i * i;
//   console.log(sonuc);
// }

// for (var j = 0; j < sayilar.length; j++) {
//   if (sayilar[j] % 5 == 0) {
//     console.log(sayilar[j]);
//   }
// }

// for (var i = 0; i < sayilar.length; i++) {
//   toplam = 0;
//   if (sayilar[i] % 2 == 0) {
//     toplam = toplam + i;
//   }
// }
// console.log(toplam);

let ogrenciler = [
  { ad: "Recep", soyad: "Aydoğan", notlar: [80, 50, 40] },
  { ad: "Özge", soyad: "Keskin", notlar: [90, 50, 70] },
];

for (let ogrenci of ogrenciler) {
  var not_sayisi = 0;
  var ortalama = 0;
  var not_toplam = 0;
  for (let not of ogrenci.notlar) {
    not_toplam += not;
    not_sayisi++;
  }
  ortalama = not_toplam / not_sayisi;
  console.log(
    `${ogrenci.ad} ${ogrenci.soyad} isimli öğrencinin not ortalamasi : ${ortalama}`
  );
}
