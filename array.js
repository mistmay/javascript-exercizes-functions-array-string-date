function firstNElementsArray(array, n) {
    if (array == null)
        return void 0;
    if (n == null)
        return array[0];
    if (n < 0)
        return [];
    return array.slice(0, n);
}

function lastNElementsArray(array, n) {
    if (array == null)
        return void 0;
    if (n == null)
        return array[array.length - 1];
    if (n < 0)
        return [];
    return array.slice(Math.max(array.length - n, 0));
}

function joinArrayToString(array) {
    return array.join(" ");
}

function dashesInEvenNumber(numberString) {
    const arrayFromNumber = String(numberString).split('');
    for (let i = 0; i < arrayFromNumber.length - 1; i++) {
        if (arrayFromNumber[i] % 2 === 0 && arrayFromNumber[i + 1] % 2 === 0) {
            arrayFromNumber[i] += '-';
        }
    }
    return arrayFromNumber.join('');
}

function mostFrequentCharacterInArray(array) {
    let counter = 0;
    let maxFrequency = 0;
    let result = '';
    for (let i = 0; i < array.length; i++) {
        counter = 0;
        for (let k = 0; k < array.length; k++) {
            if (array[i] === array[k]) {
                counter++;
            }
        }
        if (counter > maxFrequency) {
            maxFrequency = counter;
            result = `${array[i]} (${maxFrequency} times)`;
        }
    }
    return result;
}

function swapCaseString(string) {
    const arrayFromString = string.split('');
    for (let i = 0; i < arrayFromString.length; i++) {
        if (arrayFromString[i] === arrayFromString[i].toUpperCase()) {
            arrayFromString[i] = arrayFromString[i].toLowerCase();
        } else {
            arrayFromString[i] = arrayFromString[i].toUpperCase();
        }
    }
    return arrayFromString.join('');
}

function sumProductArray(array) {
    const sum = array.reduce((sumAccumulator, current) => sumAccumulator + current, 0);
    const product = array.reduce((productAccumulator, current) => productAccumulator * current, 1);
    return `Sum = ${sum}\nProduct = ${product}`;
}

function removeDuplicateItems(array) {
    const obj = {};
    let check = false;
    array.forEach(item => {
        obj[item] = '';
        if (typeof (item) === 'string') {
            check = true;
        }
    });
    if (!check) {
        const result = [];
        Object.keys(obj).forEach(item => {
            result.push(Number(item));
        });
        return result;
    } else {
        return Object.keys(obj);
    }
}

function sumIndividualIndexArray(arr1, arr2) {
    const result = [];
    let smallestLength;
    let check;
    if (arr1.length > arr2.length) {
        smallestLength = arr2.length;
        check = false;
    } else {
        smallestLength = arr1.length;
        check = true;
    }
    for (let i = 0; i < smallestLength; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    check ? result.push(...arr2.slice(smallestLength)) : result.push(...arr1.slice(smallestLength));
    return result;
}

function flattenArray(array) {
    const result = [];

    function internalFunction(array) {
        array.forEach(item => {
            Array.isArray(item) ? internalFunction(item) : result.push(item);
        });
    }
    internalFunction(array);
    return result;
}

function unionArray(arr1, arr2) {
    const union = arr1.concat(arr2);
    const obj = {};
    let check = false;
    union.forEach(item => {
        obj[item] = '';
        if (typeof (item) === 'string') {
            check = true;
        }
    });
    if (!check) {
        const result = [];
        Object.keys(obj).forEach(item => {
            result.push(Number(item));
        });
        return result;
    } else {
        return Object.keys(obj);
    }
}

function differenceArray(arr1, arr2) {
    const unionArray = arr1.concat(arr2);
    const difference = [];
    let counter = 0;
    for (let i = 0; i < unionArray.length; i++) {
        counter = 0;
        for (let k = 0; k < unionArray.length; k++) {
            if (unionArray[i] === unionArray[k]) {
                counter++;
            }
        }
        if (counter === 1) {
            difference.push(unionArray[i]);
        }
    }
    return difference;
}

function removeNull(array) {
    return array.filter(item => item !== null && item !== 0 && item !== '' && item !== false && item !== undefined && !isNaN(item));
}

function sortByTitle(array) {
    function compareToSort(x, y) {
        if (x.title < y.title) {
            return -1;
        }
        if (x.title > y.title) {
            return 1;
        }
        return 0;
    }
    return array.sort(compareToSort);
}

function targetSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length; k++) {
            if (array[i] + array[k] === target) {
                return `The first couple found which sum is equal to the target has elements of index: ${i} and ${k}`;
            }
        }
    }
    return 'There are no couples which sum is equal to the terget'
}

function removeFromArray(array, element) {
    return array.filter(item => item !== element);
}

function findIfContains(array, element) {
    if (array.find(item => item === element)) {
        return true;
    } else {
        return false;
    }
}

function moveElementArray(array, startIndex, endIndex) {
    const firstItem = array[startIndex];
    const [secondItem] = array.splice(endIndex, 1, firstItem);
    array.splice(startIndex, 1, secondItem);
    return array;
}
console.log(firstNElementsArray([7, 9, 0, -2], 3));
console.log(lastNElementsArray([7, 9, 0, -2]));
console.log(lastNElementsArray([7, 9, 0, -2], 3));
console.log(lastNElementsArray([7, 9, 0, -2], 6));
console.log(joinArrayToString(["Red", "Green", "White", "Black"]));
console.log(dashesInEvenNumber('025468'));
console.log(dashesInEvenNumber(25468));
console.log(mostFrequentCharacterInArray([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
console.log(swapCaseString('The Quick Brown Fox'));
console.log(sumProductArray([1, 2, 3, 4, 5, 6]));
console.log(removeDuplicateItems([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));
console.log(sumIndividualIndexArray([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));
console.log(sumIndividualIndexArray([1, 0, 2, 3, 4], [1, 0, 2, 3, 4]));
console.log(sumIndividualIndexArray([1, 0, 2, 3, 4], []));
console.log(flattenArray([1, [2],
    [3, [
        [4]
    ]],
    [5, 6]
]));
console.log(unionArray([1, 2, 3], [100, 2, 1, 10]));
console.log(differenceArray([1, 2, 3], [100, 2, 1, 10]));
console.log(removeNull([NaN, 0, 15, false, -22, '', undefined, 47, null]));
console.log(sortByTitle([{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
]));
console.log(targetSum([10, 20, 10, 40, 50, 60, 70], 50));
console.log(removeFromArray([2, 5, 9, 6], 5));
console.log(findIfContains([2, 5, 9, 6], 5));
console.log(moveElementArray([10, 20, 30, 40, 50], 0, 2));