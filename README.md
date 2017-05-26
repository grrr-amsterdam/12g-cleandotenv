# 12g-cleandotenv

[![Greenkeeper badge](https://badges.greenkeeper.io/grrr-amsterdam/12g-cleandotenv.svg)](https://greenkeeper.io/)

This package enables you to load .env files and return their values as an object.

It cleans out:
* Comment lines
* Single or double quotes from values


## Usage
```node
const dotenv = require('12g-cleandotenv')

dotenv.load()
.then(vars => {
    console.log(vars)
})
```


## Methods
### `.load([path])`
Loads a `.env` file and returns the cleaned up variables in an object, as a Promise.

### `.clean(input)`
Cleans up the content of a `.env` file and returns the variables in an object.
The env file content input can be a `string` or an `object`.
