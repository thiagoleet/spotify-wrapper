![Thiago - Capa](https://user-images.githubusercontent.com/9437391/153274659-915c4df9-0032-4757-a9a2-6a85107c276b.png)

# Hello there!

## Who Am I?

- 🇧🇷 I'm from Brazil
- 👨‍💻Software Engineer, currently working with Frontend Development
- 💡 Always learning.
- ⚙️ Contact me on [LinkedIn](https://www.linkedin.com/in/thiagofmleite/)
- 🚶‍♂️Follow me on [Twitter](https://twitter.com/thiagoleite), [Instagram](https://instagram.com/thiagoleet) and [Twitch](https://twitch.tv/thiagoleet).

## My stats

[![ThiagoLeet's GitHub stats](https://github-readme-stats.vercel.app/api?username=thiagoleet&show_icons=true&theme=radical&count_private=true)](https://github.com/anuraghazra/github-readme-stats)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=thiagoleet&theme=radical&layout=compact)](https://github.com/anuraghazra/github-readme-stats)

---

# Spotify Wrapper

[![Build Status](https://travis-ci.org/thiagofmleite/spotify-wrapper.svg?branch=master)](https://travis-ci.org/thiagofmleite/spotify-wrapper)

[![Coverage Status](https://coveralls.io/repos/github/thiagofmleite/spotify-wrapper/badge.svg?branch=master)](https://coveralls.io/github/thiagofmleite/spotify-wrapper?branch=master)

A wrapper to work with the [Spotify Web API](https://developer.spotify.com/web-api/).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Spotify Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Installation

```sh
$ npm install spotify-wrapper --save
```

## How to use

### ES6

```js
// to import a specific method
import { method } from 'spotify-wrapper';

// to import everything
import * as spotifyWrapper from 'spotify-wrapper';
```

### CommonJS

```js
var spotifyWrapper = require('spotify-wrapper');
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="spotify-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="spotify-wrapper.umd.min.js"></script>
```

After that the library will be available to the Global as `spotifyWrapper`. Follow an example:

```js
const albums = spotifyWrapper.searchAlbums('Choosen Artist');
```

## Methods

> Follow the methods that the library provides.

### search(query, types)

> Search for informations about artists, albums, tracks or playlists. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/).

**Arguments**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`query`   |*string*           | 'Any search query'                      |
|`type`    |*Array of strings* | ['artist', 'album', 'track', 'playlist']|

**Example**

```js
search('Incubus', ['artist', 'album'])
  .then(data => {
    // do what you want with the data
  })
```

### searchAlbums(query)

> Search for informations about Albums with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *album*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
searchAlbums('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

### searchArtists(query)

> Search for informations about Artists with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *artist*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
searchArtists('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

### searchTracks(query)

> Search for informations about Tracks with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *track*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
searchTracks('Drive')
  .then(data => {
    // do what you want with the data
  })
```

### searchPlaylists(query)

> Search for informations about Playlist with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *playlist*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
searchPlaylists('Happy Day')
  .then(data => {
    // do what you want with the data
  })
```

### getAlbum(id)

> Search for informations about a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|


**Example**

```js
getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

### getAlbums(ids)

> Search for informations about some Albums with all id's. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-several-albums/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ids`   |*Array of strings* | ['id1', 'id2']|

**Example**

```js
getAlbum(['4aawyAB9vmqN3uQ7FjRGTy', '1A2GTWGtFfWp7KSQTwWOyo'])
  .then(data => {
    // do what you want with the data
  })
```

### getAlbumTracks(id)

> Search for all tracks in a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album-tracks/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|

**Example**

```js
getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

| ![Thiago Leite](https://avatars3.githubusercontent.com/u/9437391?s=400&u=74f9add9aa3d5c8eef078316e6d01f8036592c78&v=4&s=150)|
|:---------------------:|
|  [Thiago Leite](https://github.com/thiagofmleite/)   |

See also the list of [contributors](https://github.com/thiagofmleite/spotify-wrapper/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
