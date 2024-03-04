let intervalId; // Declare a variable to store the interval ID

document.getElementById('start').addEventListener(
    "click",
    () => {
        const randomColor = () => {
            const randomNumber = Math.floor(Math.random() * 16777215);
            const hexCode = "#" + randomNumber.toString(16);
            document.body.style.backgroundColor = hexCode;
        };

        // Set interval and store the interval ID

        if(!intervalId){
            intervalId = setInterval(randomColor, 1000);
        }
    },
    false
);

document.getElementById('stop').addEventListener(
    "click",
    () => {
        // Clear the interval using the interval ID
        clearInterval(intervalId);
        intervalId = null;
    },
    false
);
