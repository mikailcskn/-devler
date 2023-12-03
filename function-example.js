

// todo dışarıdan gönderilen sayının karesini hesaplayıp geri döndüren fonksiyonu yazınız.

// ÇöZÜM 1
// const sonuc = 0   //! CONST değişkene asla tekrar atama yapılamaz.

// function islem(sayi1) {  
//     sonuc = sayi1 * sayi1
// }

// islem(7)
// console.log(sonuc);




// ÇÖZÜM 2

// function karesiniHesapla(sayi) {
//     // sayıyı al, kendisiyle çarp, geri döndür.
//     const sayininKaresi = sayi * sayi 
//     return sayininKaresi
// }


// const sonuc = karesiniHesapla(5)

// console.log(sonuc);



// todo fonksiyona gönderilen ders notu değerine göre, 50'nin altında ise, "Dersten Kaldınız", üstünde ise "Dersi Geçtiniz" gibi
// todo metini yazdıran console ifadesini yazınız!. 

// function dersNotu(Not) {
//     if (Not >= 50) {
//         return "Dersi Geçtiniz"
//     }
//     else {
//         return "Dersten Kaldınız"
//     }
// }
// const dertenGectiMi = dersNotu(40)

// console.log(dertenGectiMi)

// todo Şekil bilgisi ve kenar değerlerini girip verilen şeklin alanını hesaplayan fonksiyonu yazınız ? Üçgen -> Kenar1 * Kenar2 / 2 , Kare -> Kenar1*Kenar2 , Dikdörtgen -> Kenar1 * Kena
function seklinAlani(kenar1,kenar2,sekil) {

    if(sekil === 'üçgen'){
       return kenar1 * kenar2 / 2
    }
    else if (sekil === 'kare') {
        return kenar1 * kenar2
    }
    else if (sekil === 'dikdörtgen') {
        return kenar1 * kenar2
    }
    else{
        return "Yanlış bir bilgi girdiniz!"
    }
    
}
const islemSonucu = seklinAlani(5,6,'daire')

console.log(islemSonucu);