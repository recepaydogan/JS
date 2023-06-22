function selamlama() {
  console.log("Merhaba");
}

selamlama();

function massage(msg) {
  console.log(msg);
}
massage("hi");

function Yas_hesapla(Dogum_Yili) {
  return new Date().getFullYear() - Dogum_Yili;
}

function Emeklilik_Suresi(Dogum_Yili, isim) {
  var yas = Yas_hesapla(Dogum_Yili);
  var Kalan_Sene = 65 - yas;
  if (Kalan_Sene > 0) {
    console.log(`${isim}, emekli olmanıza ${Kalan_Sene} yıl kaldı.`);
  } else {
    console.log("Zaten emekli oldunuz.");
  }
}

Emeklilik_Suresi(2001, "Recep");
