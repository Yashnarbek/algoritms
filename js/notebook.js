// Xaridorda yetarli pul bo'lsa va tanaffusda bo'lsa daftar sotiladi

let a = prompt()
let b = confirm("Tanaffusda bo'lsangiz ok tugmasini bosing, aks holda censel ni bosing")
if(a >= 20 && b == true){
    console.log("Daftar sotib olishingiz mumkin");
}else {
    console.log("Daftar sotib ololmaysiz");
}