import { search, searchAlbums, searchArtists, searchPlaylists, searchTracks } from './search';
import { getAlbum, getAlbumTracks, getAlbums } from './album';
import API_URL from './config';
import toJSON from './utils';

module.exports = {
    API_URL,
    toJSON,
    search,
    searchArtists,
    searchAlbums,
    searchPlaylists,
    searchTracks,
    getAlbum,
    getAlbums,
    getAlbumTracks,
};
