var sefElement = document.querySelectorAll("#vozenjeKola li");
sefElement.forEach((parent) => {
    var carImage = parent.querySelector("img");
    carImage.addEventListener("click", function () {
        carImage.dataset.pozicija++;
        carImage.style.left = carImage.dataset.pozicija * 10 + "%";
    })
})