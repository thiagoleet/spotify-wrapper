import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src/index';

sinonStubPromise(sinon);
chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('#SpotifyWrapper Library', function () {
    it('should create an instance of SpotifyWrapper', () => {
        let spotify = new SpotifyWrapper({});
        expect(spotify).to.be.an.instanceof(SpotifyWrapper);
    });

    it('should receive apiURL as an option', () => {
        let spotify = new SpotifyWrapper({
            apiURL: 'blablabla'
        });
        expect(spotify.apiURL).to.be.equal('blablabla');
    });

    it('should use the default url if not provided', () => {
        let spotify = new SpotifyWrapper({});
        expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
    });

    it('should receive token as an option', () => {
        let spotify = new SpotifyWrapper({
            token: 'foo'
        });
        expect(spotify.token).to.be.equal('foo');
    });

    describe('#Request method', function () {
        let stubbedFetch;
        let promise;

        beforeEach(() => {
            stubbedFetch = sinon.stub(global, 'fetch');
            promise = stubbedFetch.returnsPromise();
        });

        afterEach(() => {
            stubbedFetch.restore();
        });
    
        it('should have a request method', () => {
            let spotify = new SpotifyWrapper({});
            expect(spotify.request).to.exist;
        });

        it('should call fetch when request', () => {
            let spotify = new SpotifyWrapper({
                token: 'foo'
            });

            spotify.request('url');
            expect(stubbedFetch).to.be.calledOnce;
        });

        it('should call fetch with correct url', () => {
            let spotify = new SpotifyWrapper({
                token: 'foo'
            });

            spotify.request('url');
            expect(stubbedFetch).to.been.calledWith('url');
        });

        it('shoul call fetch with the rights headers passed', () => {
            let spotify = new SpotifyWrapper({
                token: 'foo'
            });

            const headers = {
                headers: {
                    Authorization: `'Bearer foo'`,
                }
            };

            spotify.request('url');
            expect(stubbedFetch).to.been.calledWith('url', headers);
        });
    });
});