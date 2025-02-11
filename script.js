let bigButtonBoi = document.getElementById('buttonCool');
let superCoolButton = document.getElementById('buttonExtraCool');
let number = document.getElementById('heheText');

let heheTextVal = localStorage.getItem("heheTextVal");

if (heheTextVal === null) {
    localStorage.setItem("heheTextVal", "0");
    heheTextVal = "0";
}

function develoeperToolsHehe() {
    localStorage.clear("heheTextVal")
}

function getColor() {
    let colorHex = '';
    const hexChars = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) 
        colorHex += hexChars[(Math.floor(Math.random() * 16))]; 

    let colorName = ntc.name(colorHex)
    
    return { color: colorName[1], hex: "#" + colorHex };
}

function average() {
    let { color, hex } = getColor();
    
        document.body.style.backgroundColor = hex;
        bigButtonBoi.innerHTML = color;
        bigButtonBoi.style.fontFamily = randomFont;
        heheTextVal++;
        localStorage.setItem("heheTextVal", heheTextVal);
        number.innerHTML = heheTextVal; 
}

bigButtonBoi.addEventListener('click', () => {
    average(bigButtonBoi);
});

let colorRotations;

superCoolButton.addEventListener('click', () => {
    colorRotations = Math.floor(Math.random() * 250)
    document.body.style.transition = 'background-color 0.1s ease-in-out';
    let count = 0;
    let interval = setInterval(() => {
        if (count >= colorRotations) {
            clearInterval(interval);
            superCoolButton.innerHTML = 'Loopdy Loop'
        } else {
            average();
            count++;
        }
    }, 80);
}); 