import {generate} from "random-words";
import { useEffect , useState} from "react";

// const randomWords = generate({exactly: 2});
// console.log(randomWords);

let spanObject, currentTime, elapsedTimeSeconds, lastCorrectUserIndex, buffer;
let userString = "";
let charArray = [];
let originalIndex = 0;
let index = 0;
let userIndex = 0;
let wrongChars = 0;
let currentWord = 0;
let badEntry = false;
let spaceWasPressed = false;
let startTime = Date.now();

// function indexBuffer(index){
//     for (var i = index; i < originalString.length; i++){
//         if (originalString[i] == " ") return i - index + 1;
//     }
// }

// function updateWordClass(index){
//     for (var i = 0; i < charArray.length; i++){
//         charArray[i].classList.remove("current-word");
//     }

//     for (var j = index - 1; j >= 0 && charArray[j].textContent != " "; j--) console.log(j);
//     console.log(j);

//     for (var k = j + 1; k < charArray.length && charArray[k].textContent != " "; k++){
//         charArray[k].classList.add("current-word");
//         console.log(k);
//     }
// }

// // function displayChars(){
// //     wordsBox.innerHTML = "";
// //     for (var i = 0; i < charArray.length; i++){
// //         wordsBox.appendChild(charArray[i]);
// //     }
// // }

// function countWrongChars(index){
//     var count = 0;
//     for (var i = index; i > lastCorrectUserIndex; i--){
//         if (charArray[i].matches(".wrong")) count++
//     }
//     return count;
// }

function makeSpanArray(char, index){
    return (
        <span key={index}>{char}</span>
    )
}

let rendercount = 0;

function WordsDiv(props){
    // let [charArray, setCharArray] = useState(0);
    let [charArray, setCharArray] = useState(props.originalString.split(""));
    // console.log(charArray);

    // useEffect(() => {
        
    // }, [charArray]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
    }, []);
    
    const handleKeyDown = () => {
        setCharArray((array) => [...array, "z"])
    }

    return(
        <div className="words">
            {charArray.map(makeSpanArray)}
        </div>
    )
}

// document.addEventListener("click", (e) => {
//     rendercount++;
//     console.log(rendercount, e.key);
//     charArray.push("z");
//     // setCharArray((array) => [...array, "z"]);
//     console.log(charArray);
// });

export default WordsDiv;