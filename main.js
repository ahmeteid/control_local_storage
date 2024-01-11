// Select Elements
let theInput = document.querySelector(".parent #the-input");
let allSpan = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");

allSpan.forEach(span => {
    span.addEventListener("click", (event) => {

        if(event.target.classList.contains("check-item")) {
            checkItem();
        }

        if(event.target.classList.contains("add-item")) {
            addItem();
        }

        if(event.target.classList.contains("delete-item")) {
            deleteItem();
        }

        if(event.target.classList.contains("show-items")) {
            showItems();
        }
    });
});

function checkInput() {
    
    results.innerHTML = "Input Can't Be Empty";

}

function checkItem() {

    if(theInput.value !== "") {

        if(localStorage.getItem(theInput.value)) {
            
            results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;

        } else {
            
            results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;

        }

    } else {

        checkInput();

    }
}

function addItem() {
    console.log("Add");
}

function deleteItem() {
    console.log("Delete");
}

function showItems() {
    console.log("Show");
}