# Range Contained

[![License](https://img.shields.io/badge/License-GPL%203-blue.svg)](LICENSE)

## Description

This is a JavaScript library for performing range checks.
It provides a function rangeContain, to check if one range is 
fully or partially contained in another.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contact](#contact)

## Installation

To install it, you can use npm:

```bash
npm install your-package-name
```

## Usage
You can use the function rangeContain to perform range checks:
```js
const { rangeContain } = require("rangecontain");

const range1 = [2, 5];
const range2 = [3, 8];

console.log("Fully Contained:", isContained(range1, range2, "full"));
// Expected true

range1 = [2, 5];
range2 = [4, 7];

console.log("Partially Contained:", isContained(range1, range2, "part"));
// Expected true
```
