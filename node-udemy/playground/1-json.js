const fs = require('fs')


// const book = {
//     title: 'ego is the enemy',
//     auther: 'Hamza Thabit'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

const databuffer = fs.readFileSync('1-json.json');
const dataJSON = databuffer.toString();
const data = JSON.parse(dataJSON);


data.name = 'Hamza';
data.age = 23;

const userJson = JSON.stringify(data);
fs.writeFileSync('1-json.json', userJson);