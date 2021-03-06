
// Try-Catch to avoid program freeze in JS :

const convertToRs = (dollar) => {
    if(typeof dollar === 'number'){
        return dollar * 64
    }else{
        throw Error('Amount needs to be in number')
    }
}

try{
    const myValue = convertToRs(5)
   // console.log(myValue)
}
catch (e) {
    console.log(e.message);

}
//console.log("I'll not run if prog crashes")

//Maps and For-Of loop in JS :

var john = {
    name: 'I am john',
    age: 23,
    isActive: true
}

var marry = {
    name: 'I am marry',
    age: 24,
    isActive: true
}

var sam = {
    name: 'I am sam',
    age: 29,
    isActive: false
}

let users = new Map()
users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)
//console.log(typeof users)
//console.log(users)
console.log(users.size)

// Note: Map returns iteratable: which are used for loops through it
// Difference btw Objects & Maps is that you can find out how many objects
// or entities are inside in the Map but u can't find out it with objects

//console.log(users.get('john'))
console.log(users.get('marry'))
console.log(users.keys())
console.log(users.values())

for (const key of users.keys()){
    console.log(key)
}

for (const value of users.values()){
    console.log(value.name)
    console.log(value.age)
}

for (const [key,value] of users.entries()){
    console.log(key + ": " +value.name +", "+value.age)
}


users.forEach((value, key) =>  console.log( key+ ' = ' +value.name+ ', ' +value.age))


let arr = [['john',' 24'],['marry',' 23'],['sam',' 27']]
// Method 1:
let newMap = new Map(arr)
for (const [key,value] of arr.entries()){
    console.log(`${key + 1} = ${value}`)
}

// Method 2:
newMap.forEach(((value, key) =>  console.log(`${key} ;) ${value}`)))
