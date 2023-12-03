// todo bir dizideki en büyük sayıyı bulan ve döndüren bir fonksiyon yazınız. 
// todo Örnek girdi => [1,5,12,45,4,67,53] -- Örnek Çıktı => 67

//! ALgoritmam bu olması gerekiyor
// Dizi içinde ilk elemanı en büyük sayı olarak kabul edin.
// Dizi içinde her bir sonraki elemanı kontrol edin.
// Eğer kontrol edilen eleman daha büyükse, en büyük sayı olarak kabul edin.
// Dizi içindeki tüm elemanlar kontrol edildiğinde, en büyük sayı olarak kabul edilen sayıyı döndürün.


function enBuyukSayiyiBul(dizi) {
    // Eğer dizi boşsa veya geçerli bir dizi değilse, Sayı bulunamadı döndürücek
    if (!Array.isArray(dizi) || dizi.length === 0) {
        return "Sayi Bulunamadi";
    }

    // Başlangıçta en büyük sayıyı dizinin ilk elemanı olarak alalım
    let enBuyukSayi = dizi[0];

    // Diziyi tarayarak en büyük sayıyı bulucak
    for (let i = 1; i < dizi.length; i++) {
        if (dizi[i] > enBuyukSayi) {
            enBuyukSayi = dizi[i];
        }
    }
    // Çıkan En Büyük sayıyı dışarıya döndürürelim
    return enBuyukSayi;
}


let sayilar = [3, 7, 9, 2];
let enBuyukSayi = enBuyukSayiyiBul(sayilar);
console.log("En buyuk sayi:", enBuyukSayi);