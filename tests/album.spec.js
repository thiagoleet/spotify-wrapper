import { API_URL } from '../src/config'
import chai, { expect } from 'chai';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);
chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
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
        it('should exist the getAlbum method', () => {
            expect(getAlbum).to.exist;
        });

        it('should exist the getAlbums method', () => {
            expect(getAlbums).to.exist;
        });
        
        it('should exist the getAlbumTracks method', () => {
            expect(getAlbumTracks).to.exist;
        });
    });

    describe('getAlbum', () => {
        // verifica se o fetch ocorre
        it('should call fetch method', () => {
            const album = getAlbum();
            expect(stubbedFetch).to.have.been.calledOnce;
        });

        // verifica se o fetch ocorre com a url desejada
        it('should call fetch with the correct URL', () => {
            const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTy`);

            const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTk`);
        });

        // verifica se o dado é recebido pela promise
        if ('should return the correct data from Promise', () => {
            promise.resolves({
                album: 'name'
            });
            const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(album.resolvedValue).to.be.eql({ album: 'name' });
        });

    });

    describe('getAlbumTracks', () => {
        // verifica se o fetch ocorre
        it('should call fetch method', () => {
            const album = getAlbumTracks();
            expect(stubbedFetch).to.have.been.calledOnce;
        });

        // verifica se o fetch ocorre com a url desejada
        it('should call fetch with the correct URL', () => {
            const album = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks`);

            const album2 = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTk');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTk/tracks`);
        });

        // verifica se o dado é recebido pela promise
        if ('should return the correct data from Promise', () => {
            promise.resolves({
                album: 'name'
            });
            const album = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
            expect(album.resolvedValue).to.be.eql({ album: 'name' });
        });

    });

    describe('getAlbums', () => {
        // verifica se o fetch ocorre
        it('should call fetch method', () => {
            const album = getAlbums();
            expect(stubbedFetch).to.have.been.calledOnce;
        });

        // verifica se o fetch ocorre com a url desejada
        it('should call fetch with the correct URL', () => {
            const album = getAlbums('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubbedFetch).to.have.been
                .calledWith(`${API_URL}/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy`);
        });

        // verifica se o dado é recebido pela promise
        if ('should return the correct data from Promise', () => {
            promise.resolves({
                album: 'name'
            });
            const album = getAlbums('4aawyAB9vmqN3uQ7FjRGTy');
            expect(album.resolvedValue).to.be.eql({ album: 'name' });
        });

    });
});