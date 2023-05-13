import fetch from 'node-fetch'

console.log('hello world!')

fetch('https://postman-echo.com/get')
    .then(response => response.json()) //?
