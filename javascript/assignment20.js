let array = [13, 160, 512, 22, 250, 160, 301, 45, 22, 13, 13, 66, 100]
function getFindDuplicate(array) {
    let duplicateArray = [];
    for (let i = 0; i < array.length; i++) {
        if (
            array.indexOf(array[i]) != i &&
            duplicateArray.indexOf(array[i]) == -1
        ) {
            duplicateArray.push(array[i])
        }
    }
    return duplicateArray;
}
console.log(getFindDuplicate(array));
