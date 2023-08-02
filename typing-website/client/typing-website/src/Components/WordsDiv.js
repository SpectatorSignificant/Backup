import { useEffect , useState} from "react";
import CharSpan from "./CharSpan";

let startTime, endTime, duration, score, originalString, lastCorrectOriginalIndex, lastCorrectUserIndex
let originalIndex = 0
let userIndex = 0
let wrongChars = 0
let userString = ""
let spaceWasPressed = false

function WordsDiv(props){
    originalString = props.originalString
    const chars = []
    props.originalString.split("").forEach(element => {
        chars.push({
            text: element,
            class: [],
            id: chars.length
        })
    });
    const [charArray, setCharArray] = useState(chars)
    // console.log("charArray:", charArray)

    // const bar = (e) => {
    //     setCharArray([...charArray, {text: e.key, class: [], id: charArray.length}])
    //     console.log(e.key)
    //     // console.log(array, [...array, e.key])
    // }

    // const handleArrayModification = () => {
    //     const modifiedArray = arrayOfObjects.map((item) => {
    //       // Modify the objects here (e.g., change a property)
    //       return { ...item, name: 'Modified Object' };
    //     });
    //     // updateArrayOfObjects(modifiedArray);
    // }
    const countWrongChars = (index) => {
        var count = 0;
        for (var i = index; i > lastCorrectUserIndex; i--){
            if (charArray[i].class.includes("wrong")) count++
        }
        return count;
    }

    const indexBuffer = (index) => {
        for (var i = index; i < originalString.length; i++){
            if (originalString[i] === " ") return i - index + 1;
        }

        return originalString.length - index + 1
    }

    const handleKeyDown = (e) => {
        if ((e.key.length === 1 || e.key === "Backspace") && (originalIndex < originalString.length)){
            console.log(originalString[originalIndex])
            if (userIndex === 1){
                startTime = Date.now();
            } 
            if (e.key === originalString[originalIndex].toLocaleLowerCase() && wrongChars === 0){
                if (e.key === " " && spaceWasPressed === false) spaceWasPressed = true
                else if (e.key !== " ") spaceWasPressed = false
    
                userString += e.key
                const newCharArray = charArray.map((element, index) => {
                    if (index === userIndex){
                        const className = element.class;
                        className.push("correct")
                        return {...element, class: className}
                    } else {
                        return element
                    }
                })
                console.log("newCharArray:", newCharArray)
                setCharArray(newCharArray)
                // charArray[userIndex].class.push()
                // charArray[userIndex].classList.add("correct");
                lastCorrectUserIndex = userIndex;
                lastCorrectOriginalIndex = originalIndex;
                userIndex += 1;
                originalIndex += 1;
            } else if (e.key !== "Backspace" && e.key !== " "){
                const newCharArray = [
                    ...charArray.slice(0, userIndex),
                    { id: charArray.length, text: e.key, class: ["wrong"]},
                    ...charArray.slice(userIndex)
                ]
                setCharArray(newCharArray)
                // spanObject = document.createElement("span");
                // spanObject.textContent = e.key;
                // spanObject.classList.add("wrong");
                // charArray.splice(userIndex, 0, spanObject);
                userString += e.key;
                userIndex += 1;
                wrongChars += 1;
            } else if (e.key === "Backspace" && wrongChars > 0){
                // console.log(charArray[userIndex - 1].classList, charArray[userIndex - 1].classList.length);
                // if (charArray[userIndex - 1].classList.includes("wrong")){
                const newCharArray = [...charArray]
                newCharArray.splice(userIndex - 1, 1)
                setCharArray(newCharArray)
                // charArray.splice(userIndex - 1, 1);
                userString = userString.slice(0, userString.length - 1);
                userIndex -= 1;
                wrongChars -= 1;
                // }
            } else if (e.key === "Backspace" && spaceWasPressed){
                spaceWasPressed = false;
                userString = userString.slice(0, userString.length - 1);
                userIndex -= 1;
                originalIndex -= 1;
                wrongChars = countWrongChars(userIndex);
                userIndex = lastCorrectUserIndex + wrongChars + 1;
                originalIndex = lastCorrectOriginalIndex + 1;
                // console.log(wrongChars, originalIndex, userIndex);
                
            } else if (e.key === " " && spaceWasPressed === false){
                const buffer = indexBuffer(originalIndex);
                originalIndex += buffer;
                userIndex += buffer //+ wrongChars;
                // userIndex += wrongChars;
                wrongChars = 0;
                userString += e.key;
                spaceWasPressed = true;
                // console.log(buffer, originalIndex, userIndex, wrongChars);
            }
            if (originalIndex >= originalString.length){
                endTime = Date.now()
                duration = (endTime - startTime)/1000
                score = (originalString.length*60)/(5*duration)
                console.log({duration, score})
            }
        }
        
    }
    
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
        
    }, [charArray])
    
    return(
        <div className="words">
            {charArray.map(CharSpan)}
        </div>
    )
}

export default WordsDiv;