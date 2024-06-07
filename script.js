var sefElement = document.querySelectorAll("#vozenjeKola li");
var novaIgra = document.querySelector(".kopce-nova-igra");
sefElement.forEach((parent) => {
    var carImage = parent.querySelector("img");
    carImage.addEventListener("click", function () {
        carImage.dataset.pozicija++;
        if (carImage.dataset.pozicija >= 10) {
            carImage.dataset.pozicija = 0;
        }
        carImage.style.left = carImage.dataset.pozicija * 10 + "%";
    })
})

novaIgra.addEventListener("click", function () {
    let numbers = [1, 2, 3, 4, 5];
    let src = "assets (2)/assets/images/";
    sefElement.forEach((parent) => {
        var carImage = parent.querySelector("img");
        carImage.style.left = "0%";
        carImage.dataset.pozicija = 0; 
        let index = Math.floor(Math.random() * numbers.length); 
    let brojRandomImg = numbers.splice(index, 1)[0]; 
        var carImage = parent.querySelector("img");
        carImage.src = src + brojRandomImg + ".svg";  
    })
})
let numbers = [1, 2, 3, 4, 5];
sefElement.forEach((parent) => {
    
let src = "assets (2)/assets/images/";
    let index = Math.floor(Math.random() * numbers.length); 
    let brojRandomImg = numbers.splice(index, 1)[0]; 
        var carImage = parent.querySelector("img");
        carImage.src = src + brojRandomImg + ".svg";  
})