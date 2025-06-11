let fruits = ["Apple","Mango","orange"]
// index        0      1        2
console.log(fruits)
// .push

fruits.push("banana")
fruits.push("watermelon")
console.log(fruits)

fruits.unshift("madhu");
console.log(fruits)

//unshifts anodedd at first
//push adds at last

fruits.shift() // removes elements from first
fruits.pop() // removes elements from last


// .map() and .forEach[]

let numbres =["10","20","30","40"];
numbres.forEach((value)=>{
    console.log(value)
})

//forEach elemnts is used to print all the elements in an array
// forEach does not return the values

let num1 = [9,13,8];
//.find() ==> Returns the first match based on condition

num1.find((value)=>{
    console.log(value > 10)
})

//includes()
let arr =[1,2,3,4,5]
let check=arr.includes(3) // true
console.log(check)

let arr1 = [3,6,9,1,2]
//to sort the array
 console.log(arr1.sort())
console.log(arr1.reverse())

let num2 = [1,20,11,21,80,23,1053]
console.log(num2.sort((a,b)=>a-b))
console.log(num2.sort((a,b)=>b-a))

