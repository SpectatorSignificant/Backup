const saveButton = document.querySelector("#btn-save")

document.onclick = (e) =>{
    console.log(e.target)
}
const d = new DOMParser()
console.log(typeof(document.querySelector("body").outerHTML))
console.log(d.parseFromString(document.querySelector("body").outerHTML, "text/html"))

elements  = document.querySelector("body").childNodes;
console.log(elements)

elements.forEach((element) => {
    console.log(element)
})
let input = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Hackathon</title>
    <script defer src="script.js"></script>
</head>
<body>
    
    <form action="/upload" method="post" enctype="multipart/form-data">
        <label for="">Upload
            <input type="file" name="upload" id="upload-input">
        </label>
        <button type="submit" style="color:blue;">Upload File</button>
    </form>
    <ul id="main">
    Hello
    </ul>
</body>
</html>`
// let input = `<p style="color: blue;">Hello world</p>
// <div class="order">
// <div class='child'></div>
// </div>
// <button type="button" class="add" name="olives">Olives</button>`

input = d.parseFromString(input, "text/html").querySelector("html").childNodes
// input.forEach((node) => {
//     console.log(node)
// })
let html = ""
nodeNumber = 0
function DOMCreate(node){
    console.log(node.dataset)
    if (node.tagName == "BODY") node.dataset.id = nodeNumber++
    console.log("style:", node.style)
    console.log(node, node.tagName)
    const li = document.createElement("li")
    li.dataset.class = node.classList
    li.dataset.id = node.id
    if (node.tagName && node.childElementCount == 0){
        // const li = document.createElement("li")
        // li.innerText = String(node.tagName).toLocaleLowerCase()
        li.dataset.unique = nodeNumber++
        console.log(node.style)
        const span = document.createElement("span")
        span.classList.add("bullet")
        span.innerText = String(node.tagName).toLocaleLowerCase()
        li.appendChild(span)
        const ul = document.createElement("ul")
        ul.classList.add("nested")

        console.log(node)
        // try{
            // if (node.childNodes[0].tagName == void(0) && node.childNodes[0].innerText){
                // console.log(node.childNodes[0].tagName)
                let label = document.createElement("label")
                label.innerText = "innerText: "
                let input = `<input type="text" value="${node.innerText}"/>`
                ul.appendChild(label)
                ul.innerHTML += input
                label = document.createElement("label")
                const br = document.createElement("br")
                ul.appendChild(br)
                label.innerText = "style: "
                ul.appendChild(label)
                input = `<input onchange='saveHTML' type="text" value="${node.style.cssText}"/>`
                ul.innerHTML += input
                // ul.innerHTML += input
            // }
        // } catch (e){

        li.appendChild(ul)
    } else if (node.tagName){
        const span = document.createElement("span")
        span.classList.add("bullet")
        span.innerText = String(node.tagName).toLocaleLowerCase()
        li.appendChild(span)
        const ul = document.createElement("ul")
        ul.classList.add("nested")
        if (node.childNodes[0].tagName == void(0) && node.childNodes[0].innerText){
            const input = `<input type="text" value="${node.childNodes[0].innerText}"/>`
            ul.innerHTML += input
            input = `<input onchange='saveHTML' type="text" value="${node.style.cssText}" data-input="style"/>`
            ul.innerHTML += input
        }
        
        const label = document.createElement("label")
        label.innerText = "style: "
        ul.appendChild(label)
        const input = `<input onchange='saveHTML' type="text" value="${node.style.cssText}" data-input="style"/>`
        ul.innerHTML += input
        node.childNodes.forEach((childNode) => {
            ul.appendChild(DOMCreate(childNode))
        })
        li.appendChild(ul)
        // node.childNodes.map((childNode) => {
        //     ul.appendChild(DOMCreate(childNode))
        // })
        
    }
    return li
}
console.log(input)


parentList = document.querySelector("#main-list")
tempDiv = document.createElement("div")
input.forEach((element) => {
    tempDiv.appendChild(DOMCreate(element))
})


// console.log(tempDiv.innerHTML)
console.log(tempDiv)
parentList.innerHTML = (tempDiv.innerHTML)
console.log(parentList)

const styleInputs = document.querySelectorAll("input[data-input='style']")
console.log(styleInputs)

styleInputs.forEach((inputTag) => {
    inputTag.addEventListener("change", saveHTML)
})

const htmlFile = document.createElement("div")

function generateHTML(node){
    console.log(node)  
    if (node.querySelector("span")){
        const newElement = document.createElement(String(node.childNodes[0].innerText).toLocaleLowerCase())
        newElement.classList = node.dataset.class
        newElement.id = node.dataset.id
        console.log(node.childNodes)
        console.log(newElement)
        if (node.querySelector("ul")){
            const ul = node.querySelector("ul")
            const styleInput = ul.querySelector("input[data-input='style']")
            if (styleInput){
                console.log(ul, styleInput)
                newElement.style = styleInput.value
            }
        }
        if (node.childElementCount > 0 && node.querySelectorAll("li")){
            const childNodes = node.querySelectorAll("li")
            console.log(childNodes)
            if (childNodes.length > 0){
                childNodes.forEach((childNode) => {
                    console.log(childNode)
                    const newNode = generateHTML(childNode)
                    if (newNode){
                        newElement.appendChild(newNode)
                    }
                })
            }
            console.log(newElement)
            return newElement
        }
    }
}

console.log(d.parseFromString(parentList.innerHTML, "text/html").querySelector("#main-list"))
console.log(parentList.childNodes)

function saveHTML() {

    tempDiv.innerHTML = ""
    parentList.childNodes.forEach((node) => {
        console.log(node)
        if (generateHTML(node)){
        tempDiv.appendChild(generateHTML(node))
        }
    })
    console.log(tempDiv)
}
saveHTML()
// console.log(generateHTML(parentList.querySelector("#main-list")))

let toggler = document.querySelectorAll(".bullet");

for (let i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    const parentElement = this.parentElement.querySelector(".nested")
    parentElement.classList.toggle("active");
    this.classList.toggle("bullet-down");
    parentElement.querySelectorAll("li").forEach((child) => {
        console.log(child, child.style.color)
    })
  });
}

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(data), 
    });
    return response.json(); 
  }


console.log(saveButton)
saveButton.onclick = () => {
    postData("/save", tempDiv.innerHTML)
}

// elements.