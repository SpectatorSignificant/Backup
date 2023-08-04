import {generate} from "random-words"
import WordsDiv from "./WordsDiv"
import TimeDiv from "./TimeDiv"
import RestartButton from "./RestartButton"
import Icon from "./Icon"
import { faUser } from '@fortawesome/free-solid-svg-icons'

let randomWords = generate({exactly: 10})

function WrapperDiv(){
    return (
        <div className="wrapper">
            <WordsDiv originalString={randomWords.join(" ")}></WordsDiv>
            <TimeDiv></TimeDiv>
            <RestartButton></RestartButton>
            <Icon href='/' icon={faUser} />
        </div>
    )
}

export default WrapperDiv;