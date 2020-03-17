<h1 align="center">
  abbreviate
</h1>

<h3 align="center">
Abbreviate numbers in the Thousands (K), Millions (M), Billions (B) and Trillions (T)
</h3>

<p align="center">
  <a href="https://www.npmjs.org/package/@pqt/abbreviate">
    <img src="https://img.shields.io/npm/v/@pqt/abbreviate.svg" alt="Current npm package version." />
  </a>
  <a href="https://github.com/pqt/abbreviate/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Released under the MIT license." />
  </a>
  <a href="https://github.com/pqt/abbreviate/actions?workflow=status">
    <img src="https://github.com/pqt/abbreviate/workflows/status/badge.svg" alt="Current Github Action build status." />
  </a>
  <a href="https://npmcharts.com/compare/@pqt/abbreviate?minimal=true">
    <img src="https://img.shields.io/npm/dm/@pqt/abbreviate.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@pqt/abbreviate?minimal=true">
    <img src="https://img.shields.io/npm/dt/@pqt/abbreviate.svg" alt="Total downloads on npm." />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=pqtdev">
    <img src="https://img.shields.io/twitter/follow/pqtdev.svg?label=Follow%20@pqtdev" alt="Follow @pqtdev" />
  </a>
</p>

## Installation

```
npm install @pqt/abbreviate
# OR
yarn add @pqt/abbreviate
```

## Usage

```js
import { abbreviate } from "@pqt/abbreviate";

// Thousands
abbreviate(1234); // => 1K
abbreviate(1234, 1); // => 1.2K
abbreviate(1234, 2); // => 1.23K
abbreviate(1234, 3); // => 1.234K

// Millions
abbreviate(1234123); // => 1M
abbreviate(1234123, 1); // => 1.2M
abbreviate(1234123, 2); // => 1.23M
abbreviate(1234123, 3); // => 1.234M

// Billions
abbreviate(1234123412); // => 1B
abbreviate(1234123412, 1); // => 1.2B
abbreviate(1234123412, 2); // => 1.23B
abbreviate(1234123412, 3); // => 1.234B

// Trillions
abbreviate(1234123412); // => 1T
abbreviate(1234123412, 1); // => 1.2T
abbreviate(1234123412, 2); // => 1.23T
abbreviate(1234123412, 3); // => 1.234T
```

## License

MIT
