// const name = 'Emilia';
// const number = 270;
// console.log(`${name}${number}`);

const browserType = 'mozilla';
browserType.includes('zilla') ? console.log('Zilla found!') : console.log('No zilla found!');
browserType.startsWith('zilla') ? console.log('Zilla found!') : console.log('No zilla found!');
browserType.endsWith('zilla') ? console.log('Zilla found!') : console.log('No zilla found!');

const tagline = 'MDN - Resources for developers, by developers';
console.log(tagline.indexOf('developers'));