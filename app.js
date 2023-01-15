// const name = 'Emilia';
// const number = 270;
// console.log(`${name}${number}`);

// const browserType = 'mozilla';
// browserType.includes('zilla') ? console.log('Zilla found!') : console.log('No zilla found!');
// browserType.startsWith('zilla') ? console.log('Zilla found!') : console.log('No zilla found!');
// browserType.endsWith('zilla') ? console.log('Zilla found!') : console.log('No zilla found!');

// const tagline = 'MDN - Resources for developers, by developers';
// console.log(tagline.indexOf('developers'));
// console.log(browserType.slice(2));

// const radData = 'My NaMe Is MuD';
// console.log(radData.toUpperCase());
// console.log(radData.toLowerCase());

// const updated = browserType.replace('moz', 'van');
// console.log(updated);

let browserType = 'mozilla';
browserType = browserType.replace('moz', 'van');
console.log(browserType);

let quote = 'To be or not to be';
quote = quote.replaceAll('be', 'code');
console.log(quote);

const list = document.querySelector('.output');
const greetings = ['happy Birthday!',
                'Merry Christmas my love',
                'A happy Christmas to all the family',
                'You\'re all I want for Christmas',
                'Get well soon'
                ];

for (greeting of greetings) {
    if (greeting.includes('Christmas')) {
        const listItem = document.createElement('li');
        listItem.textContent = greeting;
        list.appendChild(listItem);
    }
}

// const firstQuote = 'I dO nOT lIke gREen eGgS anD HAM';

// const prpCase = firstQuote[0].toUpperCase() + firstQuote.slice(1).toLowerCase();
// console.log(prpCase);

// console.log(prpCase.replace('green eggs and ham', 'golonko and wątróbka') + '.');

// const theorem = 'Pythagorean theorem';
// const a = 5;
// const b = 8;

// const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${a * b}.`;

// console.log(myString);

// const cite = 'thEre ArE No sHoRtcuTS TO aNY PlACE Worth GoInG';

// const toProperCase = (string) => {
//     return string[0].toUpperCase() + string.slice(1).toLowerCase();
// }

// console.log(toProperCase(cite));

// console.log(Math.floor(Math.random() * 100 + 1))

// const getRandomChar = (string)  => {
//     return string.charAt(Math.floor(Math.random() * string.length))
// }

// console.log(getRandomChar(cite));

// const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// shopping.shift();

// for (product of shopping) {
//     console.log(product);
// }

// function double(number) {
//     return number * 2;
// }

// const numbers = [2, 3, 4, 5, 6];
// const doubles = numbers.map(double);
// console.log(doubles); 

// function startsWithL(city) {
//     return city[0] === 'L';
// }

// let cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
// let lCities = cities.filter(startsWithL);
// console.log(lCities);

// const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
// const newCities = data.split(',');
// console.log(newCities.length);
// console.log(newCities[0]);
// console.log(newCities[1]);
// console.log(newCities[newCities.length - 1]);

// const commaSeparated = newCities.join(',');
// console.log(commaSeparated);

// const dogNames = ['Nutka', 'Rocket','Flash','Bella','Slugger'];
// const dogString = dogNames.toString();
// console.log(dogString);

// Get list element
// make ahopping list array
// separate name from price
// display name and price on page

