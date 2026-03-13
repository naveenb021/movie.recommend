let movies = JSON.parse(localStorage.getItem("movies")) || [

{
name:"Interstellar",
poster:"https://m.media-amazon.com/images/I/81k6TF8f6aL.jpg",
review:"Mind blowing space movie",
likes:12
},

{
name:"The Dark Knight",
poster:"https://m.media-amazon.com/images/I/71pox9f6H-L.jpg",
review:"Best superhero movie ever",
likes:20
}

]


function displayMovies(){

let container = document.getElementById("movieContainer")

container.innerHTML=""

movies.forEach((movie,index)=>{

let card = document.createElement("div")

card.className="card"

card.innerHTML = `

<img src="${movie.poster}">

<div class="cardContent">

<h3>${movie.name}</h3>

<p>${movie.review}</p>

<p>❤️ ${movie.likes}</p>

</div>

`

container.appendChild(card)

})

}


function addMovie(){

let name = document.getElementById("name").value
let poster = document.getElementById("poster").value
let review = document.getElementById("review").value

if(name=="" || poster=="" || review=="") return

movies.push({

name:name,
poster:poster,
review:review,
likes:0

})

localStorage.setItem("movies",JSON.stringify(movies))

displayMovies()

}


function searchMovie(){

let text = document.getElementById("search").value.toLowerCase()

let cards = document.querySelectorAll(".card")

cards.forEach(card=>{

let title = card.querySelector("h3").innerText.toLowerCase()

card.style.display = title.includes(text) ? "block" : "none"

})

}

displayMovies()
