// We can use for in loop to iterate over object, array, map, set, string, etc.

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: "Ruby",
    swift: "Swift By Apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key] /* Sytax to access object element using key */ }`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key] /* Sytax to access array element using index) */ );
}

// We can't iterate over map using for in loop
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}