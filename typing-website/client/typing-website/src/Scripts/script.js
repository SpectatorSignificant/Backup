let userString = "";
let spanObject, currentTime, elapsedTimeSeconds;
let charArray = [];
let originalIndex = 0;
let index = 0;
let buffer;
let lastCorrectUserIndex;
let userIndex = 0;
let wrongChars = 0;
let currentWord = 0;
let badEntry = false;
let spaceWasPressed = false;
let startTime = Date.now();

originalString = randomWords.replace(/,/g, " ");
console.log('length of original string:', originalString.length);

function indexBuffer(index){
    for (var i = index; i < originalString.length; i++){
        if (originalString[i] == " ") return i - index + 1;
    }
}

function updateWordClass(index){
    for (var i = 0; i < charArray.length; i++){
        charArray[i].classList.remove("current-word");
    }

    for (var j = index - 1; j >= 0 && charArray[j].textContent != " "; j--) console.log(j);
    console.log(j);

    for (var k = j + 1; k < charArray.length && charArray[k].textContent != " "; k++){
        charArray[k].classList.add("current-word");
        console.log(k);
    }
}

function displayChars(){
    wordsBox.innerHTML = "";
    for (var i = 0; i < charArray.length; i++){
        wordsBox.appendChild(charArray[i]);
    }
}

function countWrongChars(index){
    var count = 0;
    for (var i = index; i > lastCorrectUserIndex; i--){
        if (charArray[i].matches(".wrong")) count++
    }
    return count;
}

for (var j = 0; j < originalString.length; j++){
    spanObject = document.createElement("span");
    spanObject.textContent = originalString[j];
    charArray.push(spanObject);
}

displayChars();
updateWordClass(userIndex);