// for (var i = 0; i < 10; i++) {
//   console.log("merhaba");
// }

var toplam = 0;
// for (var i = 1; i <= 10; i++) {
//   toplam += i;
//   console.log(toplam);
// }

var sayilar = [1, 3, 5, 7, 8, 9];

// for (var i = 1; i < 10; i++) {
//   console.log(sayilar[i]);
// }

// for (var i in sayilar) {
//   console.log(i);
// }

// for (let sayi of sayilar) {
//   toplam += sayi;
// }
// console.log(toplam);

// var user = {
//   name: "Sadık Turan",
//   username: "sadikturan",
//   password: "12345",
// };

// for (let info in user) {
//   console.log(user[info]);
// }

var urunler = ["Iphone 12", " Samsung S22", "Iphone 13", " Samsung S23"];

// for (var urun of urunler) {
//   console.log(urun.toUpperCase());
// }

var adet = 0;
for (var urun of urunler) {
  if (urun.includes("Samsung")) {
    adet += 1;
  }
}
console.log(adet);
