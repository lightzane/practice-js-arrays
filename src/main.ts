const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
console.log('//1. Get array of all names');
const allNames = characters.map((char) => char.name);
console.log(allNames);
// => [ 'Luke Skywalker', 'Darth Vader', 'Leia Organa', 'Anakin Skywalker' ]

console.log('//2. Get array of all heights');
const allHeights = characters.map((char) => char.height);
console.log(allHeights);
// => [ 172, 202, 150, 188 ]

console.log('//3. Get array of objects with just name and height properties');
const nameAndHeight = characters.map((char) => ({ name: char.name, height: char.height }));
console.log(nameAndHeight);
/* 
    [
        { name: 'Luke Skywalker', height: 172 },
        { name: 'Darth Vader', height: 202 },
        { name: 'Leia Organa', height: 150 },
        { name: 'Anakin Skywalker', height: 188 }
    ]
*/



console.log('//4. Get array of all first names');
const firstNames = characters.map((char) => char.name.split(' ')[0]);
console.log(firstNames);
// => [ 'Luke', 'Darth', 'Leia', 'Anakin' ]

//***REDUCE***
console.log('//1. Get total mass of all characters');
const totalMass = characters.reduce((a, b) => a + b.mass, 0);
console.log(totalMass);
// => 346

console.log('//2. Get total height of all characters');
const totalHeight = characters.reduce((a, b) => a + b.height, 0);
// initial value set to 0 -- thus 'a' is a type of number
console.log(totalHeight);
// => 712

console.log('//3. Get total number of characters by eye color');
// intival value set to {} -- thus 'a' is a type of {}
const totalEyeColor = characters.reduce((a, b) => {
    const color = b.eye_color;
    if (a[color]) {
        a[color]++;
    } else {
        a[color] = 1;
    }
    return a;
}, {});
console.log(totalEyeColor);
// => { blue: 2, yellow: 1, brown: 1 }

console.log('//4. Get total number of characters in all the character names');
const totalCharacterNames = characters.reduce((a, b) => a + b.name.length, 0);
console.log(totalCharacterNames);
// => 52

//***FILTER***
console.log('//1. Get characters with mass greater than 100');
const massGt100 = characters.filter((char) => char.mass > 100);
console.log(massGt100);

console.log('//2. Get characters with height less than 200');
const heightLt200 = characters.filter((char) => char.height < 200);
console.log(heightLt200);

console.log('//3. Get all male characters');
const maleChars = characters.filter((char) => char.gender === 'male');
console.log(maleChars);

console.log('//4. Get all female characters');
const femaleChars = characters.filter((char) => char.gender === 'female');
console.log(femaleChars);


//***SORT***
console.log('//1. Sort by mass');
const sortMass = characters.sort((a, b) => a.mass - b.mass); // a-b = ascending
console.log(sortMass);
// => array of objects sorted by mass in ascending order

console.log('//2. Sort by height');
const sortHeight = characters.sort((a, b) => b.height - a.height); // b-a = descending
console.log(sortHeight);
// => array of objects sorted by height in descending order

console.log('//3. Sort by name');
const sortName = characters.sort((a, b) => {
    if (a.name < b.name) { return -1; }
    else { return 1; }
});
console.log(sortName);
// => array of objects sorted alphabetically starting from A (a-b ascending order)

console.log('//4. Sort by gender');
const sortGender = characters.sort((a) => {
    if (a.gender === 'male') { return 1; }
    else { return -1; } // female will be listed first
});
console.log(sortGender);
// => array of objects with male in the last of the list


//***EVERY***
console.log('//1. Does every character have blue eyes?');
const isAllBlueEyes = characters.every((char) => char.eye_color === 'blue');
console.log(isAllBlueEyes);
// => false

console.log('//2. Does every character have mass more than 40?');
const isAllMassGt40 = characters.every((char) => char.mass > 40);
console.log(isAllMassGt40);
// => true

console.log('//3. Is every character shorter than 200?');
const isAllHeightLt200 = characters.every((char) => char.height < 200);
console.log(isAllHeightLt200);
// => false

console.log('//4. Is every character male?');
const isAllMale = characters.every((char) => char.gender === 'male');
console.log(isAllMale);
// => false

//***SOME***
console.log('//1. Is there at least one male character?');
const hasMale = characters.some((char) => char.gender === 'male');
console.log(hasMale);
// => true

console.log('//2. Is there at least one character with blue eyes?');
const hasBlueEyes = characters.some((char) => char.eye_color === 'blue');
console.log(hasBlueEyes);
// => true

console.log('//3. Is there at least one character taller than 210?');
const hasHeightGt210 = characters.some((char) => char.height > 200);
console.log(hasHeightGt210);
// => true

console.log('//4. Is there at least one character that has mass less than 50?');
const hasMassLt50 = characters.some((char) => char.mass < 50);
console.log(hasMassLt50);
// => true
