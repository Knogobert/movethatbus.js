<h1 align="center" style="border-bottom: none;">🚌 movethatbus.js</h1>

<h3 align="center">Extreme Prank Makeover for your website on April Fools</h3>

<p align="center">
  <a href="./LICENSE">
    <img alt="license" src="https://img.shields.io/badge/license-ISC-blue.svg" />
  </a>
  <a href="https://requirejs.org/docs/commonjs.html">
    <img alt="commonjs module" src="https://img.shields.io/badge/module-CommonJS-blue" />
  </a>
  <a href="https://www.npmjs.com/package/movethatbus.js">
    <img alt="npm version" src="https://img.shields.io/npm/v/movethatbus.js.svg?style=flat" />
  </a>
  <a href="https://www.npmjs.com/package/movethatbus.js">
    <img alt="npm downloads" src="https://img.shields.io/npm/dt/movethatbus.js.svg?style=flat" />
  </a>
  <a href="https://github.com/epranka/create-package">
    <img alt="generated with"
      src="https://img.shields.io/badge/generated%20with-%40epranka%2Fcreate--package-blue" />
  </a>
</p>

This package is made without dependencies for you to easily include and initialize it in your project.
It creates an overlaying canvas with a brumming bus, that triggers an animation with sound when clicked.

[See the DEMO](https://knogobert.github.io/movethatbus.js/demo.html)

[See the DEMO with settings](https://knogobert.github.io/movethatbus.js/demo-cookies.html)

## Install

```
npm install --save movethatbus.js
```

or

```
yarn install movethatbus.js
```

## Usage

### How to include

The script needs to be imported/included/required in your project before it can be initialized.

#### If you use ES6
```js
import moveThatBus from 'movethatbus.js'
```

#### If you don’t use ES6/don’t know
Append the file in a script tag just before the `</body>` tag, like:
```js
<script src="lib/movethatbus.js"></script>
```

### How to initialize

#### If you use ES6
Run the method init when/after DOM is mounted
```js
moveThatBus.init();
```

#### If you don’t use ES6/don’t know
The script can be initialized by adding a simple `data-movethatbus` attribute to any HTML element.

*Initialization example:*
```html
<body data-movethatbus>
```
[See the DEMO](https://knogobert.github.io/movethatbus.js/demo.html)

If you only want to prank certain visitors, `init()` with the setting `visitorsCookie` with whatever name you want for your cookie. Then make sure that the chosen visitors have that cookie set to `true`.

### How to use Settings

```js
{
  cdnUrl: 'https://raw.githubusercontent.com/knogobert/movethatbus.js/master/',
  busSrc: "lib/img/bus.png",
  soundSrcs: ["lib/sound/likeabus.mp3", "lib/sound/movethatbus.mp3", "lib/sound/engine.m4a"],
  amountOfTimesToLetBusLoad: 1, // compares to clickedCookie
  clickedCookie: 'howManyTimesDidYouMoveThatBus', // name of cookie
  visitorsCookie: false, // set to false to prank every visitor, or use string as the name for the cookie
}
```

#### If you use ES6
```js
moveThatBus.init({ visitorsCookie: 'youShouldMoveThatBus' });
```

#### If you don’t use ES6/don’t know
To be able to parse the setting keys and strings, surround them with single-quotes when using as value for data-movethatbus.

*Settings example:*
```html
<body data-movethatbus="{ 'visitorsCookie': 'youShouldMoveThatBus' }">
```
[See the DEMO with settings](https://knogobert.github.io/movethatbus.js/demo-cookies.html)


## Development

In repo root, run either `npm run watch`, `yarn watch` or `npx serve` (and browse to `localhost:5000/demo.html`)

## License

ISC License

Copyright (c) 2020 Knogobert@users.noreply.github.com

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

### Thanks to

- Bus image source: timeless.ee
- Like a bus credit: Like a Boss by Lonely Island
- Engine sound (that was cut and converted) source: [1histori](https://freesound.org/people/1histori/sounds/345925/)
- Move that bus sound source: Extreme Home Makeover
- Divine inspiration: Extreme Home Makeover
