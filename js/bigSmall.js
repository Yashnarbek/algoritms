// Sonni teskarisi o'zidan kichik bo'lsa true aks holda true chiqarsin

let a = prompt()
if(Math.floor(a/10) == 0){
    console.log("Ikki xonali son kiriting")
}else if(Math.floor(a/100) == 0){
    if(Math.floor(a/10) >= a - Math.floor(a/10)*10){
        console.log(true)
    }else {
        console.log(false)
    }
}else {
    console.log("Ikki xonali son kiritishingiz kerak");
}