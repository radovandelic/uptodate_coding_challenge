// Given the array of integers, replace every element with it's neighbouring numbers, then find the duplicate numbers
// and sum them up. It is guaranteed that provided integers are unique, which means they will not repeat.
// 
// For example for the input: -3,5,8,-1,6,11
// resulting array after replacement would be -4,-2,4,6,7,9,-2,0,5,7,10,12 and duplicate numbers are -2,7 and the 
// result will be 5.

const findDuplicates = data => {

    const counts = {}
    const duplicates = []
    for (const number of data) {
        counts[number] = counts[number] ? counts[number] + 1 : 1
    }

    for (const number in counts) {
        if (counts[number] > 1) {
            duplicates.push(Number(number))
        }
    }
    return duplicates
}

exports.overlappingSpreads = function (data) {
    const newArray = []
    for (const number of data) {
        newArray.push(number - 1)
        newArray.push(number + 1)
    }
    const duplicates = findDuplicates(newArray)
    return duplicates.reduce((a, b) => a + b, 0)
}