let dogBtn = document.getElementById("dog-btn")
let dom = document.getElementById("container")

function fetchData() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        dom.innerHTML = `<img src="${data.message}" class="image"/>`
    })
}

dogBtn.addEventListener('click', function(){fetchData()})
