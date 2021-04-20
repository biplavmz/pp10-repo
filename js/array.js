let arr = [2,5,9,1,11,87]
function f2(j){
    let largest = -1;
    let smallest = 1001;
    for(let a = 0;a<arr.length;a++){
        
        if(j[a]>largest){
            largest = j[a]
        }
        if(arr[a]<smallest){
            smallest = j[a]
        }
    }
    console.log(smallest+" "+largest);
}
f2(arr)

console.log(process.argv);

// 0 and 1 take postion input by console 

function add(num){
    console.log(num+2);
}
add(process.argv[2])