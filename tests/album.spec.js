import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { API_URL } from '../src/config';
import SpotifyWrapper from '../src/index';

sinonStubPromise(sinon);
chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('#Album', () => {
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
        it('should exist the getAlbum method', () => {
            expect(spotify.album.getAlbum).to.exist;
        });

        it('should exist the getAlbums method', () => {
            expect(spotify.album.getAlbums).to.exist;
        });
        
        it('should exist the getTracks method', () => {
            expect(spotify.album.getTracks).to.exist;
        });
    });

    describe('getAlbum', () => {
        // verifica se o fetch ocorre
        it('should call fetch method', () => {
            const album = spotify.album.getAlbum();
            expect(stubbedFetch).to.have.been.calledOnce;
        });

        // verifica se o fetch ocorre com a url desejada
        it('should call fetch with the correct URL', () => {
            const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTy`);

            const album2 = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTk`);
        });

        // verifica se o dado é recebido pela promise
        it ('should return the correct data from Promise', () => {
            promise.resolves({
                album: 'name'
            });
            const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            //TODO: expect(album.resolvedValue).to.be.eql({ album: 'name' });
        });

    });

    describe('getTracks', () => {
        // verifica se o fetch ocorre
        it('should call fetch method', () => {
            const album = spotify.album.getTracks();
            expect(stubbedFetch).to.have.been.calledOnce;
        });

        // verifica se o fetch ocorre com a url desejada
        it('should call fetch with the correct URL', () => {
            const album = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks`);

            const album2 = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTk');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTk/tracks`);
        });

        // verifica se o dado é recebido pela promise
        it('should return the correct data from Promise', () => {
            promise.resolves({
                album: 'name'
            });
            const album = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
            // TODO: expect(album.resolvedValue).to.be.eql({ album: 'name' });
        });

    });

    describe('getAlbums', () => {
        // verifica se o fetch ocorre
        it('should call fetch method', () => {
            const album = spotify.album.getAlbums();
            expect(stubbedFetch).to.have.been.calledOnce;
        });

        // verifica se o fetch ocorre com a url desejada
        it('should call fetch with the correct URL', () => {
            const album = spotify.album.getAlbums('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy`);
        });

        // verifica se o dado é recebido pela promise
        it('should return the correct data from Promise', () => {
            promise.resolves({
                album: 'name'
            });
            const album = spotify.album.getAlbums('4aawyAB9vmqN3uQ7FjRGTy');
            // TODO: expect(album.resolvedValue).to.be.eql({ album: 'name' });
        });

    });
});