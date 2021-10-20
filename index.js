/*   newForEach   */

let myArr = ["maçã", "uva", "pera"]
let retornoForEach = []
let retornoNewForEach = []

function myCallback(value) {
    retornoNewForEach.push(`${value} é muito bom!`)
}

function newForEach(array, callback){
    for(let i = 0; i < array.length; i ++){
        callback(array[i]) 
    }
}


myArr.forEach(value => {
    retornoForEach.push(`${value} é muito bom!`)
})

newForEach(myArr, myCallback)

/*   newMap   */

let myArr2 = ["banana", "melancia", "chocolate"]

function myCallback2(value) {
    return `${value} é muito bom!`
}
function newMap(arr, callback){
    let result = []
    for(let i = 0; i < arr.length; i ++){
        result.push(callback(arr[i]))
    }
    return result
}
let retornoMap = myArr2.map(myCallback2)
let retornoNewMap = newMap(myArr2, myCallback2)

/*   newFilter  */

let myArr3 = [12, 5, 8, 138, 44]

function isBigEnough(value) {
    return value >= 10;
  }

function newFilter(arr, callback){
    let result = []
    for(let i = 0; i < arr.length; i ++){
        if(callback(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}

let retornoFilter = myArr3.filter(isBigEnough)
let retornoNewFilter = newFilter(myArr3, isBigEnough)

/*   newFind  */

// let myArr3 = [12, 5, 8, 138, 44]

function found (value) {
    return value >= 10
  }


function newFind(arr, callback){
    for(let i = 0; i < arr.length; i ++){
        if(callback(arr[i])){
            return arr[i]
        }
    }
}
let retornoFind = myArr3.find(found)
let retornoNewFind = newFind(myArr3, found)

/*   newFindIndex  */

// let myArr3 = [12, 5, 8, 138, 44]

function foundIndex (value) {
    return value >= 30
  }


function newFindIndex(arr, callback){
    for(let i = 0; i < arr.length; i ++){
        if(callback(arr[i])){
            return i
        }
    }
}

let retornoFindIndex = myArr3.findIndex(foundIndex)
let retornoNewFindIndex = newFindIndex(myArr3, foundIndex)

/*   newReduce */

// let myArr3 = [12, 5, 8, 138, 44]

function reducer (previousValue, currentValue) {
    return previousValue + currentValue
  }


function newReduce(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i ++){
        sum += arr[i]
    }
    return sum
}

let retornoReduce = myArr3.reduce(reducer)
let retornoNewReduce = newReduce(myArr3)

/*   newSome */

// let myArr3 = [12, 5, 8, 138, 44]

function isBiggerThan10(element) {
    return element > 10
}

function newSome(arr, callback){
    for(let i = 0; i < arr.length; i ++){
        if(callback(arr[i])){
            return true
        }
    }
}

let retornoSome = myArr3.some(isBiggerThan10)
let retornoNewSome = newSome(myArr3, isBiggerThan10)

/*   newEvery   */

// let myArr3 = [12, 5, 8, 138, 44]

function isBigEnough(element) {
    return element >= 10;
  }

function newEvery(arr, callback){
    let count = 0
    for(let i = 0; i < arr.length; i ++){
        if(callback(arr[i])){
            count ++
        }
    }
    if(count === arr.length){
        return true
    }
    return false
}

let retornoEvery= myArr3.every(isBigEnough)
let retornoNewEvery = newEvery(myArr3, isBigEnough)


/*   newFill   */

// let myArr3 = [12, 5, 8, 138, 44]
let num = 4
let start = 1
let end = 4
function newFill(arr){
    let result = [arr[0]]
    for(let i = start; i < end; i ++){
        result.push(num)
    }
    result.push(arr[arr.length - 1])
    return result
}

let retornoFill = myArr3.fill(num, start, end)
let retornoNewFill = newFill(myArr3, start, end, num)


/*   newIncludes   */

myArr3 = [12, 5, 8, 138, 44]
let numIncludes = 44
function newIncludes(arr, num){
    
    for(let i = 0; i < arr.length; i ++){
        if(num === arr[i]){
            return true
        }
    }
    return false
}

let retornoIncludes = myArr3.includes(numIncludes)
let retornoNewIncludes = newIncludes(myArr3, numIncludes)

/*   newIndexOf   */

// let myArr3 = [12, 5, 8, 138, 44]
let chosenNum = 8
let startAt = 1
function newIndexOf(arr, num){

    for(let i = 0; i < arr.length; i ++){
        if(arr[i] === chosenNum){
            return i
        }
    }
    return -1
}

let retornoIndexOf = myArr3.indexOf(chosenNum, startAt)
let retornoNewIndexOf = newIndexOf(myArr3, numIncludes)


/*   newConcat   */

// let myArr3 = [12, 5, 8, 138, 44]
let letters = ['a', 'b', 'c', 'd', 'e']

function newConcat(arr, letters){
    let resultConcat = [...myArr3]
    for(let i = 0; i < arr.length; i ++){
        resultConcat.push(letters[i])
    }
    return resultConcat
}

let retornoConcat = myArr3.concat(letters)
let retornoNewConcat= newConcat(myArr3, letters)

/*   newJoin   */

// let myArr = ["maçã", "uva", "pera"]
let separador = '-'
function newJoin(arr, letters){
    let joinResult = []
    for(let i = 0; i < arr.length; i ++){
        joinResult.push(arr[i])
        if(i + 1 != arr.length){
            joinResult.push(separador)
        }
    }
    let joinResulPhrase = ''
    for(let i = 0; i < joinResult.length; i ++){
        joinResulPhrase += joinResult[i]
    }
    return joinResulPhrase
}

let retornoJoin = myArr.join(`${separador}`)
let retornoNewJoin= newJoin(myArr, letters)

