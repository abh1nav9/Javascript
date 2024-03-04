// Reduce is a function that takes an array and reduces it to a single value

const myNums = [1, 2, 3]

const myTotal1 = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(myTotal1);


const myTotal2 = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal2);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);

const cart = [

    {
        itemName: "Laptop",
        itemPrice: 65000
    },
    {
        itemName: "Smartphone",
        itemPrice: 25000
    },
    {
        itemName: "SSD",
        itemPrice: 8000
    },
    {
        itemName: "Tablet",
        itemPrice: 50000
    },
]

const totalCartPrice = cart.reduce((acc, item) => {
    return acc + item.itemPrice
},0)
console.log(`Total sum of cart item prices : ${totalCartPrice}`);