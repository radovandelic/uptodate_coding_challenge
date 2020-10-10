// Given the array of integers, replace every element with it's neighbouring numbers, then find the duplicate numbers
// and sum them up. It is guaranteed that provided integers are unique, which means they will not repeat.
// 
// For example for the input: -3,5,8,-1,6,11
// resulting array after replacement would be -4,-2,4,6,7,9,-2,0,5,7,10,12 and duplicate numbers are -2,7 and the 
// result will be 5.

const findDuplicates = data => {
    const negativeCounts = []
    const positiveCounts = []
    const duplicates = []
    const max = Math.max(...data)
    let min = Math.min(...data)
    for (let i = 0; i <= max; i++) {
        positiveCounts[i] = 0
    }

    if (min < 0) {
        min = -min
        for (let i = 0; i <= min; i++) {
            negativeCounts[i] = 0
        }
    }

    for (const number of data) {
        if (number < 0) {
            negativeCounts[-number]++
        } else {
            positiveCounts[number]++
        }
    }
    for (const number in negativeCounts) {
        if (negativeCounts[number] > 1) {
            duplicates.push(-number)
        }
    }
    for (const number in positiveCounts) {
        if (positiveCounts[number] > 1) {
            duplicates.push(number)
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
    return duplicates.reduce((a, b) => Number(a) + Number(b), 0)
}