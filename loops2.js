// for...of- Used to loop over the values of an array:


//for...in-Used to loop over the keys (indexes) of array and objects

let fruits = ["apple","banana","Orange"]
//            0         1        2
for (let y of fruits){
    console.log(y)
}



//for in loop used for mainly objects
//rare in arrays

let person = {
    fname: "Madhu",
    age:19,
    city: "Hyd"
}

for (let key in person){
    console.log(key, person[key])
}
 