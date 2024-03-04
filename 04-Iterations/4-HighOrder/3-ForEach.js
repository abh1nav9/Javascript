const coding = ["js", "ruby", "java", "python", "cpp"]

// Way 1
coding.forEach( function (val){
    console.log(val);
} )

// Way 2
coding.forEach( (item) => {
    console.log(item);
} )

// Way 3
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

// What parameters does forEach take?
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

// forEach with Array of Objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName, item.languageFileName);
} )