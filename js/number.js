// Ikki xonali son (juft, toq), uch xonali son(juft, toq)

let a = prompt()
if(Math.floor(a/10) == 0){
    console.log("Ikki yoki uch xonali son kiriting");
}else if(Math.floor(a/100) == 0){
    if(a%2 == 0){
        console.log("Ikki xonali juft son")
    }else {
        console.log("Ikki xonali toq son")
    }
}else if(Math.floor(a/1000) == 0){
    if(a%2 == 0){
        console.log("Uch xonali juft son")
    }else {
        console.log("Uch xonali toq son")
    }
}else {
    console.log("Son ikki yoki uch xonali bo'lishi kerak");
}