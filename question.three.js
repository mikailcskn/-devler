 // todo for tekrar edilecek kolay 3 poblem yapılıcak. iyice anla


 function SayiBulma(dizi) {
    
   let  enbuyuksayi = dizi[0]

   for (let index = 1; index < dizi.length; index++) {
    if (dizi[index] > enbuyuksayi) {
        enbuyuksayi = dizi[index]
    }
   }
   return enbuyuksayi

 }
 let sayilar = SayiBulma([1,5,7,9])

 enbuyuksayi = sayilar
 console.log("En Buyuk Sayi = ",enbuyuksayi);

 console.log("-----------------------------------------");
 /*------------------------------------------------------------------- */

  function SayiBulma2(dizi) {
    
    let  enkucuksayi = dizi[0]
 
    for (let i = 1; i < dizi.length; i++) {
     if (dizi[i] < enkucuksayi) {
         enkucuksayi = dizi[i]
     }
    }
    return enkucuksayi
 
  }
  let sayilar2 = SayiBulma2([1,5,7,9])
 
  enkucuksayi = sayilar2
  console.log("En Kucuk Sayi = ",enkucuksayi);

  /*---------------------------------------------------------------- */

console.log("-----------------------------------------");
let users = ["Mikail","Atakan","Mustafa"]
let index = 0; // Dışarıda da tanımlanabilir.
for (; index < users.length; index++) {
    console.log(users[index]);
    
}

console.log("-----------------------------------------");

  /*---------------------------------------------------------------- */

for (let index = 0; index < 20; index++) {
    if (index%2 == 0) {
        console.log("Cift");
    }
    else {
        console.log("Tek");
    }    
}

console.log("-----------------------------------------");

  /*---------------------------------------------------------------- */

  let toplam = 0;
  for (let i = 50; i >= 1; i--) {
        toplam =toplam+i
        console.log(i); 
  }
  console.log("Toplamlari = ",toplam);
