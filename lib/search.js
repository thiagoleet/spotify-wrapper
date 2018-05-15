'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchTracks = exports.searchPlaylists = exports.searchArtists = exports.searchAlbuns = exports.search = undefined;

var _config = require('./config');

var _utils = require('./utils');

/* global fetch */

var search = exports.search = function search(query, type) {
    fetch(_config.API_URL + '/search?q=' + query + '&type=' + type).then(_utils.toJSON);
};
var searchAlbuns = exports.searchAlbuns = function searchAlbuns(query) {
    search(query, 'album');
};
var searchArtists = exports.searchArtists = function searchArtists(query) {
    search(query, 'artist');
};
var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
    search(query, 'playlist');
};

var searchTracks = exports.searchTracks = function searchTracks(query) {
    search(query, 'track');
};