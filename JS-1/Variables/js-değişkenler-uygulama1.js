let ögr;
let ogr1Adi = "Ada";
let ogr1SoyAdi = "Bilgi";
let ogr1DogumTarihi = 2012;
let ögr1mat1 = 70;
let ögr1mat2 = 70;
let ögr1mat3 = 80;
let year = 2023;

let ogr2Adi = "Yiğit";
let ogr2SoyAdi = "Bilgi";
let ogr2DogumTarihi = 2010;
let ögr2mat1 = 40;
let ögr2mat2 = 40;
let ögr2mat3 = 50;

let ogr1Yasi = year - ogr1DogumTarihi;
let ogr2Yasi = year - ogr2DogumTarihi;

let ogr1Ort = (ögr1mat1 + ögr1mat2 + ögr1mat3) / 3;
let ogr2Ort = (ögr2mat1 + ögr2mat2 + ögr2mat3) / 3;

console.log(ogr1Ort >= 50);
console.log(ogr2Ort >= 50);
