function detectFontAvailability(fonts) {
    const baseFonts = ['monospace', 'sans-serif', 'serif'];
    const testString = 'mmmmmmmmmmlli';
    const testSize = '72px';

    // Create a span element to test font sizes
    const testSpan = document.createElement('span');
    testSpan.style.fontSize = testSize;
    testSpan.textContent = testString;

    // Get the width of the test string in each base font
    const baseWidths = {};
    baseFonts.forEach((font) => {
        testSpan.style.fontFamily = font;
        document.body.appendChild(testSpan);
        baseWidths[font] = testSpan.offsetWidth;
        document.body.removeChild(testSpan);
    });

    // Function to check if a font is available
    function isFontAvailable(font) {
        return baseFonts.some((baseFont) => {
            testSpan.style.fontFamily = `${font},${baseFont}`;
            document.body.appendChild(testSpan);
            const matched = testSpan.offsetWidth !== baseWidths[baseFont];
            document.body.removeChild(testSpan);
            return matched;
        });
    }

    // Check each font and log the available ones
    const availableFonts = fonts.filter(isFontAvailable);
    console.log('Available fonts:', availableFonts);
}

// Example usage:
const fontsToCheck = [
    // Sans-serif fonts
    'Arial', 'Arial Black', 'Verdana', 'Tahoma', 'Trebuchet MS', 'Impact', 'Helvetica', 'Gill Sans', 'Lucida Sans', 'Franklin Gothic Medium',

    // Serif fonts
    'Times New Roman', 'Georgia', 'Garamond', 'Palatino Linotype', 'Book Antiqua', 'Didot',

    // Monospace fonts
    'Courier New', 'Lucida Console', 'Monaco', 'Consolas',

    // Cursive fonts
    'Comic Sans MS', 'Brush Script MT', 'Lucida Handwriting',

    // Fantasy fonts
    'Copperplate', 'Papyrus', 'Brush Script MT',

    // System UI fonts
    'Segoe UI', 'Roboto', 'San Francisco', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Oxygen-Sans'
];

detectFontAvailability(fontsToCheck);
