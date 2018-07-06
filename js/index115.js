function getLongerText(str1,str2) {
    return str1 + str2;
}

let text1 = "This is a ";
let text2 = "long combined string!";

console.log(getLongerText(text1,text2));

text1 = "This is ANOTHER ";
text2 = "string which is longer when combined!";

console.log(getLongerText(text1,text2));

text1 = "This is a THIRD ";
text2 = "string which is made up of 2 other strings";

console.log(getLongerText(text1,text2));