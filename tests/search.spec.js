import { API_URL } from '../src/config'
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'; // integração sinon x chai
import sinonStubPromise from 'sinon-stub-promise'; // promises

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import { search, searchAlbuns, searchArtists, searchPlaylists, searchTracks } from '../src/search';

describe('Search', () => {
    let stubbedFetch;
    let promise;

    beforeEach(() => {
        stubbedFetch = sinon.stub(global, 'fetch');
        promise = stubbedFetch.returnsPromise();
    });

    afterEach(() => {
        stubbedFetch.restore();
    });

    describe('smoke tests', () => {

        // search (genérico) + de um tipo
        // searchAlbuns
        // searchArtists
        // searchTracks
        // searchPlaylists

        it('should exist the search method', () => {
            expect(search).to.exist;
        });

        it('should exist the searchAlbuns method', () => {
            expect(searchAlbuns).to.exist;
        });
        it('should exist the searchArtists method', () => {
            expect(searchArtists).to.exist;
        });
        it('should exist the searchPlaylists method', () => {
            expect(searchPlaylists).to.exist;
        });

    });

    describe('generic search', () => {
        it('should call fetch function', () => {
            const artists = search();
            expect(stubbedFetch).to.have.been
                .calledOnce;
        });

        it('should receive the correct url to fetch', () => {
            context('passing one type', () => {
                const artists = search('Incubus', 'artist');
                expect(stubbedFetch).to.have.been
                    .calledWith(`${API_URL}/search?q=Incubus&type=artist`);

                const albuns = search('Incubus', 'album');
                expect(stubbedFetch).to.have.been
                    .calledWith(`${API_URL}/search?q=Incubus&type=album`);
            });

            context('passing more than one type', () => {
                const artistsAndAlbuns = search('Incubus', ['artist', 'album']);
                expect(stubbedFetch).to.have.been
                    .calledWith(`${API_URL}/search?q=Incubus&type=artist,album`);
            });
        });
    });


    describe('searchArtist', () => {
        it('should call fetch function', () => {
            const artists = searchArtists('Incubus');
            expect(stubbedFetch).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const artists = searchArtists('Incubus');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/search?q=Incubus&type=artist`);
        });
    });

    describe('searchAlbums', () => {
        it('should call fetch function', () => {
            const albums = searchAlbuns('Incubus');
            expect(stubbedFetch).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const albums = searchAlbuns('Incubus');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/search?q=Incubus&type=album`);
        });
    });

    describe('searchtracks', () => {
        it('should call fetch function', () => {
            const tracks = searchTracks('Incubus');
            expect(stubbedFetch).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const tracks = searchTracks('Incubus');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/search?q=Incubus&type=track`);
        });
    });

    describe('searchPlaylist', () => {
        it('should call fetch function', () => {
            const playlists = searchPlaylists('Incubus');
            expect(stubbedFetch).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const playlists = searchPlaylists('Incubus');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/search?q=Incubus&type=playlist`);
        });
    });

});