function FlattenArray( arr){
    return arr.flat(Infinity)
}

let arr = [1, 2, [3, 4, [5, [6, 7, [8]]]]];
console.log(FlattenArray(arr))

