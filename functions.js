function reverseNumber(number) {
    return String(number).split("").reverse().join("");
}

function checkPalindrome(string) {
    if (string === "" || string === " ") {
        return "This is not a valid string to check for palindrome";
    } else if (string.length === 1) {
        return "This is a string of one character";
    } else if (JSON.stringify(string.toLowerCase().split("")) === JSON.stringify(string.toLowerCase().split("").reverse())) {
        return `${string} is palindrome`;
    } else {
        return `${string} is not palindrome`;
    }
}

function alphabeticalOrder(string) {
    return string.split("").sort().join("");
}

function firstLetterToUpper(string) {
    const arrayFromString = string.split(" ");
    const arrayResult = [];
    arrayFromString.forEach(item => {
        let characterArray = item.split("");
        characterArray[0] = characterArray[0].toUpperCase();
        arrayResult.push(characterArray.join(""));
    });
    return arrayResult.join(" ");
}

function longestWordInAString(string) {
    const arrayFromString = string.split(" ");
    let largestLength = 0;
    let longestString = "";
    for (let i = 0; i < arrayFromString.length; i++) {
        if (arrayFromString[i].length > largestLength) {
            largestLength = arrayFromString[i].length;
            longestString = arrayFromString[i];
        }
    }
    return longestString;
}

function vowelsCounter(string) {
    let counter = 0;
    string.toLowerCase().split("").forEach(item => {
        if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
            counter++;
        }
    });
    return counter;
}

function isItPrimaryNumber(number) {
    if (number <= 1) {
        return false;
    } else if (number === 2) {
        return true;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function secondGreatestLowest(array) {
    const onlyNumbers = array.filter(item => typeof (item) === 'number');
    const highest = Math.max(...onlyNumbers);
    const lowest = Math.min(...onlyNumbers);
    const allExceptHighestLowest = onlyNumbers.filter(item => item !== highest && item !== lowest);
    return [Math.min(...allExceptHighestLowest), Math.max(...allExceptHighestLowest)];
}

function timesCharacterInString(string, char) {
    let counter = 0;
    string.split('').forEach(item => {
        if (item === char) {
            counter++;
        }
    });
    return counter;
}

function firstNotRepeatedCharacter(string) {
    const arrayFromString = string.split('');
    let result = '';
    let counter = 0;
    for (let i = 0; i < arrayFromString.length; i++) {
        counter = 0;
        for (let k = 0; k < arrayFromString.length; k++) {
            if (arrayFromString[i] === arrayFromString[k]) {
                counter++;
            }
        }
        if (counter < 2) {
            result = arrayFromString[i];
            break;
        }
    }
    if (result === '') {
        return "There are not Not-Repeated characters";
    } else {
        return result;
    }
}

function longestCountryName(array) {
    return array.reduce((longest, current) => longest.length > current.length ? longest : current, "");
}

function factorial(number) {
    if (number < 0 || typeof (number) !== 'number') {
        return "Error"
    } else if (number === 0) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

function integersInRange(start, end) {
    const array = [];
    if ((end - start) <= 1 || typeof (start) !== 'number' || typeof (end) !== 'number') {
        return 'Error';
    } else {
        for (let i = start + 1; i < end; i++) {
            array.push(i);
        }
    }
    return array;
}

function arraySum(array) {
    return array.reduce((sum, current) => sum + current, 0);
}

function evenOrOdd(number) {
    if (number < 0) {
        number = Math.abs(number);
    }
    if (number === 0) {
        return `${number} is even`;
    } else {
        if (number % 2 === 0) {
            return `${number} is even`;
        } else {
            return `${number} is odd`;
        }
    }
}

function sortAndMerge(array1, array2) {
    const concatArray = array1.concat(array2);
    const array = [];
    let counter = 0;
    for (let i = 0; i < concatArray.length; i++) {
        counter = 0;
        for (let k = 0; k < concatArray.length; k++) {
            if (concatArray[i] === concatArray[k]) {
                counter++;
            }
        }
        if (counter < 2) {
            array.push(concatArray[i]);
        } else {
            array.push(concatArray[i]);
            for (let y = i + 1; y < concatArray.length; y++) {
                if (concatArray[y] === concatArray[i]) {
                    concatArray[y] = " ";
                }
            }
        }
    }
    const arrayNoRepeat = array.filter(item => item !== " ");
    return arrayNoRepeat.sort((a, b) => a - b);
}

function largerNumber(a, b) {
    return a >= b ? a : b;
}

function signOfProduct(a, b, c) {
    let counter = 0;
    [a, b, c].forEach(item => {
        if (item !== Math.abs(item)) {
            counter++;
        }
    });
    if (counter === 0 || (counter % 2) === 0) {
        return '+';
    } else {
        return '-';
    }
}

function oddEven0_15() {
    for (let i = 0; i <= 15; i++) {
        i === 0 ? console.log(`${i} is even`) : (i % 2) === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
    }
}

function averageGrade(array) {
    let averageScore = array.reduce((sum, current) => sum + current[1], 0) / array.length;
    if (averageScore < 60) {
        return `Average Grade = ${averageScore} : F`;
    } else if (averageScore < 70) {
        return `Average Grade = ${averageScore} : D`;
    } else if (averageScore < 80) {
        return `Average Grade = ${averageScore} : C`;
    } else if (averageScore < 90) {
        return `Average Grade = ${averageScore} : B`;
    } else if (averageScore < 100) {
        return `Average Grade = ${averageScore} : A`;
    }
}

function fizzBuzz() {
    for (let i = 1; i <= 15; i++) {
        (i % 3 == 0) && (i % 5 == 0) ? console.log('FizzBuzz'): (i % 3 == 0) ? console.log('Fizz') : (i % 5 == 0) ? console.log('Buzz') : console.log(i);
    }
}

function draw() {
    const array = [];
    for (let i = 0; i < 5; i++) {
        let string = "";
        for (let k = 0; k <= i; k++) {
            string += '* ';
        }
        array.push(string);
    }
    return array.join('\n');
}

function sumMultiplyOf3And5() {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if ((i % 3) === 0 || (i % 5) === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(reverseNumber(539871));
console.log(checkPalindrome("Madam"));
console.log(checkPalindrome("hello"));
console.log(alphabeticalOrder("webmaster"));
console.log(firstLetterToUpper("the quick brown fox"));
console.log(longestWordInAString("Web Development Tutorial"));
console.log(vowelsCounter("The quick brown fox"));
console.log(isItPrimaryNumber(37));
console.log(secondGreatestLowest([9, 8, 4, 1, 2, 3, 5, 6, 7, 10]));
console.log(timesCharacterInString('w3resource.com', 'o'));
console.log(firstNotRepeatedCharacter('abacddbec'));
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));
console.log(factorial(5));
console.log(integersInRange(2, 9));
console.log(arraySum([1, 2, 3, 4, 5, 6]));
console.log(evenOrOdd(234));
console.log(evenOrOdd(-45));
console.log(sortAndMerge([18, 15, 10, 9], [19, 30, 15, 20, 10]));
console.log(largerNumber(8, 5));
console.log(signOfProduct(3, -7, 2));
console.log(signOfProduct(3, -7, -2));
oddEven0_15();
console.log(averageGrade([
    ['David', 80],
    ['Vinoth', 77],
    ['Divya', 88],
    ['Ishitha', 95],
    ['Thomas', 68]
]));
fizzBuzz();
console.log(draw());
console.log(sumMultiplyOf3And5());