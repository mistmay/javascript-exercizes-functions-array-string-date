function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function monthName(date) {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()];
}

function compareDates(date1, date2) {
    if (date1 > date2) {
        return "Date1 > Date2";
    } else if (date1 < date2) {
        return "Date1 < Date2";
    } else {
        return "Date1 = Date2";
    }
}

function addMinutes(date, minutes) {
    return new Date(date.getTime() + (minutes * 60000));
}

function isWeekend(stringDate) {
    const date = new Date(stringDate);
    if (date.getDay() === 0 || date.getDay() === 6) {
        return true;
    } else {
        return false;
    }
}

function dateDifferenceInDays(stringDate1, stringDate2) {
    const date1 = new Date(stringDate1);
    const date2 = new Date(stringDate2);
    return Math.floor(Math.abs((date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24)));
}

function yesterday(stringDate) {
    const date = new Date(stringDate);
    return new Date(date.setDate(date.getDate() - 1)).toString();
}

function maxDate(array) {
    let max = 0;
    let result = '';
    array.forEach(item => {
        const date = new Date(item);
        if (date.getTime() > max) {
            max = date.getTime()
            result = item;
        }
    });
    return result;
}

function minDate(array) {
    let min = new Date(array[0]).getTime();
    let result = array[0];
    array.forEach(item => {
        const date = new Date(item);
        if (date.getTime() < min) {
            min = date.getTime();
            result = item;
        }
    });
    return result;
}

function daysPassed(date) {
    const firstOfYear = new Date(date.getFullYear(), 0, 1);
    return Math.ceil((date.getTime() - firstOfYear.getTime() + 1) / (1000 * 60 * 60 * 24));
}

function calculateAge(date) {
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const differenceMonths = today.getMonth() - date.getMonth();
    if (differenceMonths < 0 || (differenceMonths === 0 && today.getDate() < date.getDate())) {
        age--;
    }
    return age;
}

function textualDay(date) {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
}

function twoDigitsYear(date) {
    return Number(String(date.getFullYear()).substr(2));
}

function hoursWithZero(date) {
    const hour = date.getHours();
    if (hour === 0) {
        return '12';
    }
    if (hour > 0 && hour < 10) {
        return `0${hour}`;
    }
    if (hour > 9 && hour < 13) {
        return `${hour}`;
    }
    if (hour > 12 && hour < 22) {
        return `0${hour - 12}`;
    }
    if (hour > 21 && hour < 24) {
        return `${hour - 12}`;
    }
}

console.log(getDaysInMonth(1, 2012));
console.log(monthName(new Date("10/11/2009")));
console.log(compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(addMinutes(new Date(2014, 10, 2), 30).toString());
console.log(isWeekend('Nov 15, 2014'));
console.log(dateDifferenceInDays('04/02/2014', '11/04/2014'));
console.log(dateDifferenceInDays('12/02/2014', '11/04/2014'));
console.log(yesterday('Nov 15, 2014'));
console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));
console.log(minDate(['2015/02/01', '2015/02/02', '2015/01/03']));
console.log(daysPassed(new Date(2015, 0, 15)));
console.log(daysPassed(new Date(2015, 11, 14)));
console.log(calculateAge(new Date(1990, 1, 25)));
console.log(textualDay(new Date(2015, 10, 1)));
console.log(twoDigitsYear(new Date(1989, 10, 1)));
console.log(hoursWithZero(new Date(1989, 10, 1)));