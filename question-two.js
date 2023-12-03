// todo Ürünün orjinal fiyatına göre indirim yapın ve son fiyatı döndüren bir fonksşyon yazın. 
// todo 100TL ve üzeri alışverişlerde %15, 50TL ve 100TL arasında %10, 50TL'nin altında ise %5 indirim uygulayın.
// todo Örnek girdi => 100 TL lik bir ürün
// todo Örnek çıktı => 90 TL

/* */
function indirim(urunfiyati) {
    if (urunfiyati > 100) {
        return urunfiyati - (urunfiyati * 15/ 100)
    }
    else if (urunfiyati <= 100 && urunfiyati >= 50) {
        return urunfiyati - (urunfiyati * 10 / 100)
    }
    else if (urunfiyati < 50) {
        return urunfiyati - (urunfiyati * 5 / 100)
    }
}
const indirimlifiyat = indirim(100)

console.log(indirimlifiyat)

