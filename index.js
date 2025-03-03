function isSubset(arr1,arr2){
    return arr2.every(val=>arr1.includes(val))
}
const arr1=[1,2,3,4,5,6,7,8]
const arr2=[3,4,5]
console.log(isSubset(arr1,arr2));
