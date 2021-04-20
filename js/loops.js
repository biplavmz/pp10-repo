let count = 0

for(let a = 1;a<=20;a++){
if(a/3){
    console.log('FIZZ' +' '+a)
    count = count + 1
}else if (a/5){
    console.log('BUZZ' + ' ' +a)
}else (a/3 && a/5);{
    console.log('FIZZBUZZ' + ' ' +a)
}

}
console.log(count)
