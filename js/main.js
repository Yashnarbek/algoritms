// Uchta sondan kichigini aniqlash

let a = prompt("1")
let b = prompt("2")
let c = prompt("3")

if(a < b){
    let d = a
    if(d < c){
        console.log(d)
    }
    else{
        console.log(c)
    }
}else if(b < c){
    console.log(b)
}
else{
    console.log(c)
}
