import randomWords from "random-words";
import 

export default function WordsDiv(){
    randomWords = generate({exactly: 3, minLength: 6, maxLength: 6}).concat(generate({exactly: 16, minLength: 2, maxLength: 5}));
    randomWords = randomWords.concat(generate({exactly: 1, minLength: 7, maxLength: 8}));
    console.log(randomWords);
    function randomizeArray(array) {
        var swapIndex;
        for (var i = 0; i < array.length; i++){
            swapIndex = Math.floor(Math.random()*array.length);
            [array[swapIndex], array[i]] = [array[i], array[swapIndex]];
        }
      
        return array;
    }
    randomizeArray(randomWords);
    // console.log(randomWords);

    return(
        <div className="words"></div>
    )
}