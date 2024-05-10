const body = document.querySelector("body")

function createButton(section) {
    const btn = document.createElement("button")
    btn.innerText = "Click"
    section.appendChild(btn)
    return btn
}

function createUl(section, array) {
    const ul = document.createElement("ul")
    section.appendChild(ul)
    array.forEach(element => {
        createLi(ul, element)
    });
}

function createLi(section, element) {
    const li = document.createElement("li")
    li.innerText = element
    section.appendChild(li)
}

createButton(body)

const btn = document.querySelector("button")

btn.addEventListener("click", ()=> {
    generateArray()
})


async function generateArray(){

    const requestURL = "./assets/json/list.json"
    const request = new Request(requestURL)
    const response = await fetch(request);
    const list = await response.json();

    createUl(body, list)
}

