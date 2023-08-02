import {generate} from "random-words"
import WordsDiv from "./WordsDiv"

let randomWords = generate({exactly: 10})

function WrapperDiv(){
    return (
        <div className="wrapper">
            <WordsDiv originalString={randomWords.join(" ")}></WordsDiv>
        </div>
    )
}

export default WrapperDiv;