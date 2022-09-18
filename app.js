// Rezervacija //

let sve_rezervacije = []
let pregled_tekst_EL = document.querySelector("#pregled_tekst")
let sve_rezervacije_storage = JSON.parse(localStorage.getItem("sve_rezervacije"))


function spremnik() {
    localStorage.setItem("sve_rezervacije", JSON.stringify(sve_rezervacije))
}

function rezervacija_1() {
    if (sve_rezervacije_storage === null ) {
        sve_rezervacije.push("Honda CR-V")
    } else {
        sve_rezervacije = sve_rezervacije_storage
        sve_rezervacije.push("Honda CR-V")
    }
    spremnik()
    location.href = "./uspjesna_rezervacija.html"
}

function rezervacija_2() {
    if (sve_rezervacije_storage === null ) {
        sve_rezervacije.push("Kawasaki Versys")
    } else {
        sve_rezervacije = sve_rezervacije_storage
        sve_rezervacije.push("Kawasaki Versys")
    }
    spremnik()
    location.href = "./uspjesna_rezervacija.html"
}

function rezervacija_3() {
    if (sve_rezervacije_storage === null ) {
        sve_rezervacije.push("Ford Ecosport")
    } else {
        sve_rezervacije = sve_rezervacije_storage
        sve_rezervacije.push("Ford Ecosport")
    }
    spremnik()
    location.href = "./uspjesna_rezervacija.html"
}

function rezervacija_4() {
    if (sve_rezervacije_storage === null ) {
        sve_rezervacije.push("Peugeot Django")
    } else {
        sve_rezervacije = sve_rezervacije_storage
        sve_rezervacije.push("Peugeot Django")
    }
    spremnik()
    location.href = "./uspjesna_rezervacija.html"
}

function rezervacija_5() {
    if (sve_rezervacije_storage === null ) {
        sve_rezervacije.push("VW Up")
    } else {
        sve_rezervacije = sve_rezervacije_storage
        sve_rezervacije.push("VW Up")
    }
    spremnik()
    location.href = "./uspjesna_rezervacija.html"
}

function rezervacija_6() {
    if (sve_rezervacije_storage === null ) {
        sve_rezervacije.push("VW Golf")
    } else {
        sve_rezervacije = sve_rezervacije_storage
        sve_rezervacije.push("VW Golf")
    }
    spremnik()
    location.href = "./uspjesna_rezervacija.html"
}

function pregled() {
    if (sve_rezervacije_storage === null) {
        pregled_tekst_EL.textContent = "Nema aktivnih rezervacija"
    } else {
        pregled_tekst_EL.textContent = sve_rezervacije_storage
    }
}

function ukloni() {
    localStorage.removeItem("sve_rezervacije")
    location.reload()
}


///// Mobilna navigacijska traka ////

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  console.log(typeof(toggleButton))
})


//// Fiksirana navigacijska traka ////

window.onscroll = function () {
    navigacija()
}

let navbar = document.querySelector(".navbar")
let sticky = navbar.offsetTop

function navigacija() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky_1")
    } else {
        navbar.classList.remove("sticky_1")
    }
}



