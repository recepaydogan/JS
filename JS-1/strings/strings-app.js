let url = "http://www.sadikturan.com/";
let kursAdi = "Komple Web Geliştirme Kursu";

let sonuc;
//   1  = 26
sonuc = url.length;
sonuc = kursAdi.split("").length;
sonuc = url.startsWith("http");
sonuc = url.includes("Eğitimi");
kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "-");
url = url.concat(kursAdi);

console.log(url);
console.log(sonuc);
