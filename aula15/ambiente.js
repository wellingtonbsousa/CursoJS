let num = [5, 8, 2 , 9, 3]
console.log(num)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O vetor tem ${num.length} posições`)
num.sort()
console.log(num)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.push(1)
console.log(num)

for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}