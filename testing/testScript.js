const baseUrl = 'https://coolors.co'; // append colors (hex), e.g. https://coolors.co/a799b7-9888a5-776472-445552-294d4a

/*
var n_match = ntc.name("#6195ED");
n_name = n_match[1]; // This is the text string for the name of the match

alert(n_match); // Alerts: Corflowrr Blue or some shit


let letters = "0123456789ABCDEF"; 

// HTML color code starts with # 
let color = '#'; 

// Generating 6 times as HTML color code 
// consist of 6 letter or digits 
for (let i = 0; i < 6; i++) 
	color += letters[(Math.floor(Math.random() * 16))]; 

console.log(color);


function makeid(length) {
    let colorResult = '';
    const hexChars = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) 
        colorResult += hexChars[(Math.floor(Math.random() * 16))]; 

    console.log(colorResult);
    let colorName = ntc.name(colorResult)
    console.log(colorName[1]);

    return colorResult;
}

makeid(6);

*/











let bigButtonBoi = document.getElementById('buttonCool');
let superCoolButton = document.getElementById('buttonExtraCool');

// console.log(colorArray);

function getColor() {
    let colorHex = '';
    const hexChars = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) 
        colorHex += hexChars[(Math.floor(Math.random() * 16))]; 

    let colorName = ntc.name(colorHex)
    // console.log(colorName[1]);
    
    return { color: colorName[1], hex: "#" + colorHex };
}

function average() {
    let { color, hex } = getColor();
        document.body.style.backgroundColor = hex;
        bigButtonBoi.innerHTML = color;
}

bigButtonBoi.addEventListener('click', () => {
    average(bigButtonBoi);
});

superCoolButton.addEventListener('click', () => {
    document.body.style.transition = 'background-color 0.1s ease-in-out';
    let count = 0;
    let interval = setInterval(() => {
        if (count >= 100) {
            clearInterval(interval);
            superCoolButton.innerHTML = 'Loopdy Loop'
        } else {
            average(superCoolButton);
            count++;
        }
    }, 80);
}); 