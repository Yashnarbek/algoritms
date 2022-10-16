// Sonning musbat (juft-toq) yoki manfiy (juft-toq) ekanligi qaytarilsin

let a = prompt()
if(a == 0) {
    console.log("son 0 ga teng");
}else if(a > 0){
    if(a % 2 == 0){
        console.log("musbat juft son");
    }else {
        console.log("musbat toq son");
    }
}else {
    if(a%2 == 0){
        console.log("manfiy juft son");
    }else {
        console.log("manfiy toq son");
    }
}