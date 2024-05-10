const body = document.querySelector("body")
const inputName = document.querySelector("#inputName")
const btn = document.querySelector("#btn")

const fetchName = (name) => fetch("https://api.agify.io/?name=" + name);

    function generateDiv(section) {
        const div = document.createElement("div")
        section.appendChild(div)
        console.log("je rentre la -> div");
    }

    function generateP(section, element) {
        const p = document.createElement("p")
        p.innerText = element
        section.appendChild(p)
        console.log("Je rentre ici -> p");
    }

    btn.addEventListener("click", ()=>{
        fetchName(inputName.value)
            .then((response) => response.json())
            .then((json) => {
        console.log("je passe ici");
        generateDiv(body)
        const div = document.querySelector("div")
        generateP(div, json.name)
        generateP(div, json.age)
                //devrait fonctionner, mais too many request
	})  
	.catch((error) => {
		console.log("There was an error!", error);
	});
        console.log("j'ai cliqué sur le btn");
    })

    console.log(btn);