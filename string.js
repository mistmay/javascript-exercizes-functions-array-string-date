function stringToArray(string) {
    return string.split(' ');
}

function truncateString(string, number) {
    if (typeof (string) === 'string' && number > 0) {
        return string.substr(0, number);
    }
}

function abbrevName(string) {
    const array = string.split(' ');
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > 1) {
            array[i] = array[i].charAt(0) + '.';
        } else {
            array[i] += '.';
        }
    }
    return array.join(' ');
}

function protectEmail(string) {
    const array = string.split('@');
    const subStringPart = array[0].substr(0, array[0].length / 2);
    array[0] = subStringPart + '...';
    return array.join('@');
}

function parameterize(string) {
    return string.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeWords(string) {
    const array = string.split(' ');
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    return array.join(' ');
}

function swapCase(string) {
    const array = string.split('');
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i].toUpperCase()) {
            array[i] = array[i].toLowerCase();
        } else {
            array[i] = array[i].toUpperCase();
        }
    }
    return array.join('');
}

function camelize(string) {
    const array = string.toLowerCase().split(' ');
    for (let i = 1; i < array.length; i++) {
        const arrayCharacter = array[i].split('');
        arrayCharacter[0] = arrayCharacter[0].toUpperCase();
        array[i] = arrayCharacter.join('');
    }
    return array.join('');
}

function repeat(string, times) {
    if (typeof (times) === 'undefined' || times <= 1) {
        return string;
    } else {
        let newString = string;
        for (let i = 2; i <= times; i++) {
            newString += string;
        }
        return newString;
    }
}

function insert(string, insertion, position) {
    if (typeof (insertion) !== 'string') {
        return string;
    }
    if (typeof (position) === 'undefined' || position <= 1) {
        position = 0;
    } else {
        position--;
    }
    const array = string.split('');
    if (position !== 0 && array[position - 1] !== " ") {
        insertion = " " + insertion;
    }
    if (array[position] !== " ") {
        insertion = insertion + " ";
    }
    array[position] = insertion + array[position];
    return array.join('');
}

function stringChop(string, dimension) {
    const result = [];
    if (typeof (dimension) === 'undefined' || dimension === 0 || dimension >= string.length) {
        result.push(string);
        return result;
    }
    let start = 0;
    let end = dimension;
    while (start < string.length) {
        result.push(string.slice(start, end));
        start = end;
        end += dimension;
    }
    return result;
}

function countOccurence(string, target) {
    const array = string.toLowerCase().split('');
    target = target.toLowerCase();
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        let pieceOfString = '';
        for (let k = i; k < i + target.length; k++) {
            pieceOfString += array[k];
        }
        if (pieceOfString === target) {
            counter++;
        }
    }
    return counter;
}

function subStrAfterChars(string, char) {
    let index;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === char) {
            index = i;
            break;
        }
    }
    if (typeof (index) === 'undefined') {
        return string;
    } else {
        return string.slice(index + 1);
    }
}

function truncate(string, number) {
    const array = string.split(' ');
    if (number <= 0 || number >= array.length) {
        return string;
    }
    return array.slice(0, number).join(' ');
}

function alphabetize(string) {
    return string.split('').sort().join('').trim();
}

function removeFirstOccurrence(string, target) {
    const array = string.toLowerCase().replace(target.toLowerCase(), "~").split('~');
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].trim();
    }
    return array.join(' ').trim();
}

function stringEndsWith(string, target) {
    if (string.slice(string.length - target.length) == target) {
        return true;
    } else {
        return false;
    }
}

console.log(stringToArray("Robin Singh"));
console.log(truncateString("Robin Singh", 4));
console.log(abbrevName("Robin Singh"));
console.log(protectEmail("robin_singh@example.com"));
console.log(parameterize("Robin Singh from USA."));
console.log(capitalize('js string exercises'));
console.log(capitalizeWords('js string exercises'));
console.log(swapCase('AaBbc'));
console.log(camelize("JavaScript exercises"));
console.log(repeat('Ha!'));
console.log(repeat('Ha!', 3));
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.', 'JavaScript'));
console.log(insert('We are doing some exercises.', 'JavaScript', 18));
console.log(stringChop('w3resource'));
console.log(stringChop('w3resource', 2));
console.log(stringChop('w3resource', 3));
console.log(countOccurence("The quick brown fox jumps over the lazy dog", 'the'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'e'));
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
console.log(alphabetize('United States'));
console.log(removeFirstOccurrence("The quick brown fox jumps over the lazy dog", 'the'));
console.log(stringEndsWith('JS PHP PYTHON', 'PYTHON'));