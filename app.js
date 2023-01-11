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

const list = document.querySelector('.output');
const cities = [
    'lonDon',
    'ManCHESTer',
    'BiRmiNGHAM',
    'LIVERpool'
]

for (const city of cities) {
    const result = city;
    const listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
}