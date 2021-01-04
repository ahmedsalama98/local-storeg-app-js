let buttuns = document.querySelectorAll(".buttons button"),
    input = document.querySelector(".the-input"),
    resulte = document.querySelector(".results >span");



buttuns.forEach(butt => {

    butt.addEventListener("click", (e) => {

        if (e.target.classList.contains("check-item")) {

            checkitem()
        }


        if (e.target.classList.contains("add-item")) {
            additem()
        }


        if (e.target.classList.contains("delete-item")) {
            deleteitem()
        }


        if (e.target.classList.contains("show-item")) {
            showitem()
        }


    })
});

function checkitem() {
    if (input.value !== "") {
        if (localStorage.getItem(input.value)) {
            resulte.innerHTML = ` found local item called <span>${input.value}</span>`
        } else {
            resulte.innerHTML = ` no local item called <span>${input.value}</span>`
        }


    } else {
        emptyinput()
    }

    input.value = "";

};

function additem() {


    if (input.value !== "") {
        localStorage.setItem(input.value, "test");
        resulte.innerHTML = `  local item called <span>${input.value}</span>  added`

        input.value = "";


    } else {
        emptyinput()
    }

}

function deleteitem() {
    if (input.value !== "") {

        if (localStorage.getItem(input.value)) {
            localStorage.removeItem(input.value);
            resulte.innerHTML = `  local item called <span>${input.value}</span>  deleted`
        } else { resulte.innerHTML = ` no local item called <span>${input.value}</span> ` }


    } else {
        emptyinput()
    }

    input.value = ""
}

function showitem() {
    resulte.innerHTML = ""

    if (localStorage.length) {
        for (let [key, value] of Object.entries(localStorage)) {
            resulte.innerHTML += `<span class="key"> ${key} <span>`
        }
    }


}


function emptyinput() {
    resulte.innerHTML = `input cant be empty`
}

console.log(localStorage)