const BASE_URL = 'https://api.icndb.com';
const RANDOM_JOKE = `${BASE_URL}/jokes/random`;
const RANDOM_JOKE_NON_EXPLICIT = `${RANDOM_JOKE}?exclude=[explicit]`;
const CATEGORIES_URL = `${BASE_URL}/categories`;

export {
    BASE_URL,
    RANDOM_JOKE,
    RANDOM_JOKE_NON_EXPLICIT,
    CATEGORIES_URL
};