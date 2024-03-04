const generateNum = () => {
    const newNum = Math.floor(Math.random() * 6 + 1);
    const finalNum = newNum.toString();
    document.querySelector('h1').innerHTML = finalNum;
}

document.querySelector('button').addEventListener(
    "click",
    generateNum,
    false
)