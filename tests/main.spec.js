import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'; // integração sinon x chai
import sinonStubPromise from 'sinon-stub-promise'; // promises

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import { search, searchAlbuns, searchArtists, searchPlaylists, searchTracks } from '../src/main';

describe('Spotify Wrapper', () => {

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

        let fetchedStub;
        let promise;

        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch');
            promise = fetchedStub.returnsPromise();
        });

        afterEach(() => {
            fetchedStub.restore();
        });

        it('should call fetch function', () => {
            const artists = search();

            expect(fetchedStub).to.have.been
                .calledOnce;
        });

        it('should receive the correct url to fetch', () => {

            context('passing one type', () => {
                const artists = search('Incubus', 'artist');
                expect(fetchedStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

                const albuns = search('Incubus', 'album');
                expect(fetchedStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
            });

            context('passing more than one type', () => {
                const artistsAndAlbuns = search('Incubus', ['artist', 'album']);
                expect(fetchedStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
            });
        });

        it.skip('should return the JSON data from the Promise', () => {
            promise.resolves({ body: 'json' });
            const artists = search('Incubus', 'artist');

            expect(artists.resolveValue).to.be.eql({ body: 'json' });
        });
    });


    describe('serchArtist', () => {
        let fetchedStub;
        let promise;

        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch');
            promise = fetchedStub.returnsPromise();
        });

        afterEach(() => {
            fetchedStub.restore();
        });

        it('should call fetch function', () => {
            const artists = searchArtists('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const artists = searchArtists('Incubus');
            expect(fetchedStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
        });
    });

    describe('searchAlbums', () => {
        let fetchedStub;
        let promise;

        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch');
            promise = fetchedStub.returnsPromise();
        });

        afterEach(() => {
            fetchedStub.restore();
        });

        it('should call fetch function', () => {
            const albums = searchAlbuns('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const albums = searchAlbuns('Incubus');
            expect(fetchedStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
        });
    });

    describe('searchtracks', () => {
        let fetchedStub;
        let promise;

        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch');
            promise = fetchedStub.returnsPromise();
        });

        afterEach(() => {
            fetchedStub.restore();
        });

        it('should call fetch function', () => {
            const tracks = searchTracks('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const tracks = searchTracks('Incubus');
            expect(fetchedStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');
        });
    });

    describe('searchPlaylist', () => {
        let fetchedStub;
        let promise;

        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch');
            promise = fetchedStub.returnsPromise();
        });

        afterEach(() => {
            fetchedStub.restore();
        });

        it('should call fetch function', () => {
            const playlists = searchPlaylists('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const playlists = searchPlaylists('Incubus');
            expect(fetchedStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');
        });
    });

});