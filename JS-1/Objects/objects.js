let siparis_bilgi = new Date();

siparis_bilgi = {
  siparis_id: 101,
  siparis_tarihi: siparis_bilgi.getFullYear(),
  ödeme_sekli: "kredikarti",
  adres: {
    sehir: "Manisa",
    ilce: "Salihli",
    mahalle: "Sart",
  },
  satinalinan_1: {
    ürünid: 5,
    ürünadi: "İphone 13 Pro",
    ürünfiyat: 22000,
  },
  satinalinan_2: {
    ürünid: 6,
    ürünadi: "İphone 13 Pro Max",
    ürünfiyat: 32000,
  },
  müsteri_id: 12,
  satici: {
    firma_id: 34,
    firma_adi: "Apple",
  },
};
/*
siparisbilgi =

*/
let sonuc;
sonuc = siparis_bilgi.siparis_tarihi;

console.log(siparis_bilgi.adres.sehir);
