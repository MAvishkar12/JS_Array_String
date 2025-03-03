1.Reverse String 
function reverseString(str){
     return str.split('').reverse().join('');
} 

let a="India";
console.log(reverseString(a));


2.Unique Element 
function UniqueElement(arr){
    return [...new Set(arr)]
}
let arr=[1,2,3,4,5,2,3,4,5,2,1]
console.log(UniqueElement(arr));


let arr1=[1,2,3,4,5,2,3,4,5,2,1]

const UniqueElement2 =arr1.reduce((acc,curr)=>{
      if(!acc.includes(curr)){
        acc.push(curr)
      }
      return acc;
},[])

console.log(UniqueElement2);

3.Remove Duplicates 
function removeDuplicate(arr){
    return arr.filter((val,index)=>arr.indexOf(val)===index)
}

let arr=[1,2,3,6,3,2,3,4,5,0,1,2,3,]
console.log(removeDuplicate(arr));

4.Smallest and Largest Element 
function smallestLargeElement(arr){
    return {max:Math.max(...arr),min:Math.min(...arr)}
}
let arr=[1,2,9,4,8,5,6]
console.log(smallestLargeElement(arr));


5.One Array Subset of Another
function isSubset(arr1,arr2){
    return arr2.every(val=>arr1.includes(val))
}
const arr1=[1,2,3,4,5,6,7,8]
const arr2=[3,4,5]
console.log(isSubset(arr1,arr2));



















