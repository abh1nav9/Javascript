// Maps - Key-Value pairs

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // Map is known for unique keys, so this will not be added


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const info = new Map()
info.set('FullName', "Abhinav Gautam")
info.set('Age', 20)
info.set('Email', "abhinav@google.com")

console.log(info);

for (const [key, value] of info) {
    console.log(`The value at key ${key} is ${value}`);
}