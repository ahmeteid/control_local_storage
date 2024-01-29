// Select Elements
let theInput = document.getElementById("the-input");
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

    })

})


function showMessage() {
        
    // results.innerHTML = "Input Can't Be Empty";

    Swal.fire("Input Can't Be Empty");

}

function checkItem() {
    
    if (theInput.value !== "") {

        if(localStorage.getItem(theInput.value)) {

            results.innerHTML = `Found Local storage Item called <span>${theInput.value}</span>`;

        } else {

            results.innerHTML = `No Local storage Item with the Name <span>${theInput.value}</span>`;

        }

    } else {
        showMessage();
    }
    
}

function addItem() {
    
    if(theInput.value !== "") {

        localStorage.setItem(theInput.value, "Test");
        results.innerHTML = `Local storage Item <span>${theInput.value}</span> added`;
        theInput.value = "";

    } else {
        showMessage();
    }

}

function deleteItem() {
    
    if(theInput.value !== "") {

        if(localStorage.getItem(theInput.value)) {

            localStorage.removeItem(theInput.value);
            results.innerHTML = `Local storage item <span>${theInput.value}</span> Deleted`;
            theInput.value = "";

        } else {
            results.innerHTML = `No locale Storage item with the Name <span>${theInput.value}</span>`;
        }
    } else {
        showMessage();
    }

}

function showItems() {

    if(localStorage.length) {
        
        // console.log(localStorage.length);
        
        results.innerHTML = "";

        for (let [key, value] of Object.entries(localStorage)) {

            results.innerHTML += `<span class="keys">${key} ${value}</span>`;
        }

    } else {
        results.innerHTML = `Local Storage is Empty`;
    }

}