//INIT ARRAY
const test = new Array(10).fill(0).map(function (item) {
    return Math.round(Math.random() * 100)
})

const test3 = new Array(10).fill(0)
for (let i = 0; i < test3.length; i++) {
    test3[i] = Math.round(Math.random() * 100)
}

const test5 = [5050005]
for (let i = 0; i < 10; i++) {
    test5.push(Math.round(Math.random() * 100))
}
console.log("test5", test5)
test5.pop()
console.log(test5)


//SUM
const test2 = [199, 1234, 2412, 3, 4, 5, 6, 7, 8, 9]
let result = 0
for (let i = 0; i < test2.length; i++) {
    result = result + test2[i]
}
console.log(result)

const test4 = [199, 1234, 2412, 3, 4, 5, 6, 7, 8, 9]
console.log(test4.reduce((prevValue, currentValue) => {
    return prevValue + currentValue
}))


const name = hella =>  hella
console.log(name("hello"))

// console.log(test, test.length)
// console.log(test3, test3.length)
// console.log(test2, test2.length)