global.fetch = require('node-fetch')

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
    token: 'BQDHZvurn-6VkPAtJWjoRI1xhGKE8jv0_w7P_k4Vyg4dbnA_UbR1gVBWebuATfcL15U95rwctzSVx1-tXuHSAiwAf6xhnPYYaa5xvvCE3FEHUPT2bPSSK5lhV4WOU1fJ_Hl02a37OymQyaH8G-L8hKlt_Vc_pQ'
})

const albums = spotify.search.albums('Incubus');

albums.then(data => console.log(data));