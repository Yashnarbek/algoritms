// Uchta sondan ortachasini aniqlash

let a = prompt("1")
let b = prompt("2")
let c = prompt("3")

if(a < b){
    if(b < c){
        console.log(b)
    }
    else{
        if(a < c){
            console.log(c)
        }
        else {
            console.log(a);
        }
    }
}else {
    if(a < c){
        console.log(a)
    }
    else {
        if(b < c){
            console.log(c)
        }
        else {
            console.log(b)
        }
    }
}
