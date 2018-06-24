global.fetch = require('node-fetch')

import { searchAlbums } from '../src/index';

const albums = searchAlbums('Incubus');

albums.then(data => console.log(data));