# Introduction

Abbreviate numbers in the Thousands (K), Millions (M), Billions (B) and Trillions (T)

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
