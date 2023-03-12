let personInfo = "     Ben Recep 21 yaşındayım ve Manisalıyım";
let sonuc;
sonuc = personInfo.toUpperCase();
sonuc = personInfo.toLowerCase();
sonuc = personInfo.slice(0, 10);
sonuc = personInfo.substring(0, 10);
sonuc = personInfo.replace("Recep", "Özge");
sonuc = personInfo.trim();

console.log(sonuc);
