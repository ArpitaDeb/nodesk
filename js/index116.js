function getHexaColor(color) {
    switch (color) {
        case "white":
            return "#FFFFFF";
            break;
        case "black":
            return "#000000";
            break;
        case "blue":
            return "#0b24fb";
            break;
        case "green":
            return "#0e7e12";
            break;
        case "yellow":
            return "#fffg38";
            break;
        case "pink":
            return "#fec1cc";
            break;
        default:
            return null;
    }
}

let inColor = "green";

if (getHexaColor(inColor) == null) {
    console.log("Please enter one of the following colors: white, black, blue, green, yellow, or pink.");
} else {
console.log(`The color ${inColor} is ${getHexaColor(inColor)} in hex!`);
}