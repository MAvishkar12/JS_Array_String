1.Reverse String :

function reverseString(str){
return str.split('').reverse().join('');
}

let a="India";
console.log(reverseString(a));

2.Unique Element :
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

3.Remove Duplicates :
function removeDuplicate(arr){
return arr.filter((val,index)=>arr.indexOf(val)===index)
}

let arr=[1,2,3,6,3,2,3,4,5,0,1,2,3,]
console.log(removeDuplicate(arr));

4.Smallest and Largest :
function smallestLargeElement(arr){
return {max:Math.max(...arr),min:Math.min(...arr)}
}
let arr=[1,2,9,4,8,5,6]
console.log(smallestLargeElement(arr));

5.One Array Subset of Another :
function isSubset(arr1,arr2){
return arr2.every(val=>arr1.includes(val))
}
const arr1=[1,2,3,4,5,6,7,8]
const arr2=[3,4,5]
console.log(isSubset(arr1,arr2));

6.Missing Number in Array 
function MissingNumber (arr,n){
      let sumN=(n*(n+1))/2
      let sumArr=arr.reduce((sum,curr)=>sum+curr,0);
      return sumN-sumArr;
}
let arr=[1,2,4,5,6,7,8]
console.log(MissingNumber(arr,8));

7.Interaction Of Two Array
function interaction(arr1,arr2){
    return arr1.filter((val)=> arr2.includes(val))
}
let arr1=[1,2,3,4,5,6,7]
let arr2=[3,4,5,6,77,88,24,12]
console.log(interaction(arr1,arr2));

8.Union of Two Array
function UninonofArray(arr1,arr2){
    return [...new Set([...arr1,...arr2])]
    //The spread operator (...) converts the Set back into an array.
}
let arr1=[1,2,3,4,5,6,7]
let arr2=[3,4,5,6,77,88,24,12]
console.log(UninonofArray(arr1,arr2));


9.Palindrome String
function Palindrome(str){
    const reverse=str.split(' ').reverse().join(' ');
    return str===reverse
}
let s="civic"
console.log(Palindrome(s));

10.Factorial Number
function factorial (n){
    if(n==0 || n==1) return 1;
    return n*factorial(n-1);
}
console.log(factorial(7));

11.Flatten Array
function FlattenArray( arr){
    return arr.flat(Infinity)
}

let arr = [1, 2, [3, 4, [5, [6, 7, [8]]]]];
console.log(FlattenArray(arr))

