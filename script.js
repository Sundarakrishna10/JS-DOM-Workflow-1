// data for card container..
const data = [
    { name: "Rahul", id: 123, email: "ragul@gmail.com" },
    { name: "Ravi", id: 345, email: "ravi@gmail.com" },
    { name: "Santhosh", id: 231, email: "san@gmail.com" },
    { name: "Surya", id: 890, email: "surya@gmail.com" },
    { name: "Kiran", id: 675, email: "kiran@gmail.com" },
    // { name: "krishna", id: 567, email: "krishna@gmail.com" }
]
//create a container element
const container = document.createElement("div")
container.id = "container"
document.body.appendChild(container)
container.style.display = "flex"
container.style.flexWrap = "wrap"
container.style.border = "2px solid blue"
container.style.padding = "20px"
container.style.justifyContent = "space-around"
// container.style.alignItems="center"

//create card and card details....

data.map(person => {

    
    //create card 
    const card = document.createElement("div")
    card.id = "card";
    container.appendChild(card)
    card.style.border = "2px solid green"
    card.style.display = "flex"
    card.style.flexDirection = "column"
    card.style.justifyContent = "center"
    card.style.alignItems = "center"
    card.style.width = "150px"
    card.style.margin = "20px"
    card.style.padding = "20px"
    card.style.textAlign = "center"
    //add name...
    const name = document.createElement("h3")
    name.innerHTML = person.name
    card.appendChild(name)

    //add id_number
    const id_num = document.createElement("p")
    id_num.innerHTML = person.id
    card.appendChild(id_num)

    //add email

    const email = document.createElement("p")
    email.innerHTML = person.email
    card.appendChild(email)

    //delete button...
    const button = document.createElement("button")
    button.id = "delete_button"
    button.innerHTML = "Delete"
    button.style.padding = "10px"
    button.style.borderRadius = "5px"
    
    button.addEventListener("click",carddelete)
    function carddelete(){
        container.removeChild(card)
    }
    card.appendChild(button)
})