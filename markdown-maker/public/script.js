const userInput = document.querySelector("#user-input")
const outputBox = document.querySelector("#output-box")
let userText, userTextArray;

function handleInputChange(){
    console.log(userInput.value)
    userText = userInput.value
    userTextArray = userText.split("\n")
    console.log(userTextArray)
    let html = "";
    for (let i = 0; i < userTextArray.length; i++){
        let line = userTextArray[i]
        console.log(line)
        if (line.startsWith("#")){
            let hashCount = 0
            while (line[hashCount] === "#") hashCount++
            console.log(hashCount)
            userTextArray[i] = line.slice(hashCount);
            line = userTextArray[i]
            html += `<h${hashCount}>${processLine(line)}</h${hashCount}><hr>`
        } else if (line.startsWith(">")){
            userTextArray[i] = line.slice(1);
            line = userTextArray[i]
            html += `<blockquote>${processLine(line)}</blockquote>`
        } else if (line === "***" || line === "---") {
            html += `<hr>`
        } else {
            html += `<p>${processLine(line)}</p>`
        }

        if (line.endsWith("  ")) html += `<br>`
    }
    console.log(html)
    outputBox.innerHTML = html
}

function processLine(line){
    let html = ""
    let i = 0
    while (i < line.length){
        if (line[i] == "`"){
            console.log({i})
            html += "<code>"
            let j = i + 1
            while (j < line.length){
                if (line[j] == "`"){
                    console.log({j})
                    html += "</code>"
                    i = j
                    break
                } else {
                    html += line[j]
                }
                j++
            }
            if (i == line.length - 1) break
        } else {
            html += line[i++]
        }
    }

    console.log(html)
    return html
}

function process(line){
    const chars = {bold: [], code: [], blockQuote: [], italic: []}
    for (let i = 0; i < line.length; i++){
        if (line[i] == ""){

        }
    }
}

userInput.onchange = handleInputChange