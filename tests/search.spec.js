import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'; // integração sinon x chai
import sinonStubPromise from 'sinon-stub-promise'; // promises
import { API_URL } from '../src/config'
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('#Search', () => {
    let stubbedFetch;
    let promise;
    let spotify;


    beforeEach(() => {
        stubbedFetch = sinon.stub(global, 'fetch');
        promise = stubbedFetch.returnsPromise();
        spotify = new SpotifyWrapper({
            token: 'foo'
        });
    });

    afterEach(() => {
        stubbedFetch.restore();
    });

    describe('smoke tests', () => {
        it('should exist the spotify.search.albums method', () => {
            expect(spotify.search.albums).to.exist;
        });
        it('should exist the spotify.search.artists method', () => {
            expect(spotify.search.artists).to.exist;
        });
        it('should exist the spotify.search.playlists method', () => {
            expect(spotify.search.playlists).to.exist;
        });
        
        it('should exist the spotify.search.tracks method', () => {
            expect(spotify.search.tracks).to.exist;
        });

    });

    describe('spotify.search.artists', () => {
        it('should call fetch function', () => {
            const artists = spotify.search.artists('Incubus');
            expect(stubbedFetch).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const artists = spotify.search.artists('Incubus');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/search?q=Incubus&type=artist`);
        });
    });

    describe('spotify.search.albums', () => {
        it('should call fetch function', () => {
            const albums = spotify.search.albums('Incubus');
            expect(stubbedFetch).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const albums = spotify.search.albums('Incubus');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/search?q=Incubus&type=album`);
        });
    });

    describe('spotify.search.tracks', () => {
        it('should call fetch function', () => {
            const tracks = spotify.search.tracks('Incubus');
            expect(stubbedFetch).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const tracks = spotify.search.tracks('Incubus');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/search?q=Incubus&type=track`);
        });
    });

    describe('searchPlaylist', () => {
        it('should call fetch function', () => {
            const playlists = spotify.search.playlists('Incubus');
            expect(stubbedFetch).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const playlists = spotify.search.playlists('Incubus');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/search?q=Incubus&type=playlist`);
        });
    });

});