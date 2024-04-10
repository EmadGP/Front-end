let games;
let added_games = []

fetch('games.json')
    .then(response => response.json())
    .then(data => {
        games = data.games_list;

        Adding_games(added_games, games);
    })
    .catch(error => console.error('Error fetching JSON:', error));

function Adding_games(added_games,games){
    if (games){
        let myDiv = document.getElementById("games")
        myDiv.innerHTML = "";

        for (var i = 0; i < games.length; i++) {

            let game_container = document.createElement("div")
            game_container.setAttribute("id", "game_container")

            let game = document.createElement("div");
            game.setAttribute("id", "game");

            let checkbox = document.createElement("input")
            checkbox.setAttribute("data-title", games[i].title);
            checkbox.setAttribute("type", "checkbox")
            checkbox.setAttribute("id","select_button")

            var title = document.createElement("strong")
            title.textContent = (games[i].title)
            title.setAttribute("id", "title")

            var rating = document.createElement("p")
            rating.textContent = ("Rating: " + games[i].rating)
            rating.setAttribute("id", "rating")

            var genre = document.createElement("p")
            genre.textContent = (games[i].genre)
            genre.setAttribute("id", "genre")

            var price = document.createElement("p")
            price.textContent = (" €" + games[i].price)
            price.setAttribute("id", "price")

            game.appendChild(title)
            game.appendChild(rating)
            game.appendChild(genre)
            game.appendChild(price)

            game_container.appendChild(checkbox)
            game_container.appendChild(game)

            myDiv.appendChild(game_container)

            checkbox.addEventListener("click", function (){
                if (this.checked) {
                    const gameTitle = this.getAttribute("data-title");
                    added_games.push(gameTitle);
                    window.alert("Game added");

                }

                else {
                    const gameTitle = this.getAttribute("data-title");
                    const index = added_games.indexOf(gameTitle);
                    if (index !== -1) {
                        added_games.splice(index, 1);
                    }
                    window.alert("Game removed");
                    Winkelmandje();
                    checkbox_checked();

                }
            })

            let winkelmandje = document.getElementById("winkelmandje");
            winkelmandje.addEventListener("click", checkbox_checked);
        }


    }
    else {
        console.log("Error")
    }
}

// <----------------Keep checkbox checked & Breken button----------------->
function checkbox_checked(){
    let Page_title = document.getElementById("Page_title");
    let myDiv = document.getElementById("games")

    Page_title.innerHTML = "Winkelmandje";

    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function(checkbox) {
        const gameTitle = checkbox.getAttribute("data-title");

        if (added_games.includes(gameTitle)) {
            checkbox.checked = true;
        }
    });

    let breken = document.createElement("button")
    breken.setAttribute("id", "breken_button")
    breken.setAttribute("onclick", "Breken_prijs()")
    breken.textContent = "Breken"
    myDiv.appendChild(breken)

    breken.addEventListener("click", function (){
        let total_price = Breken_prijs();
        window.alert("Total price: €" + total_price)
    })
}
// <-----------------Filter on Price------------------>
function Price_filter() {
    input_price = parseFloat(document.getElementById("Prijs_input").value);
    const filteredGames = games.filter(game => game.price <= input_price);
    Adding_games(added_games,filteredGames);
}
// <-----------------Filter on Rating------------------>
function Rating_filter() {
    input_price = parseFloat(document.getElementById("Rating_filter").value);
    const filteredGames = games.filter(game => game.rating <= input_price);
    Adding_games(added_games,filteredGames);
}

// <-----------------Filter on Genre------------------>
function Genre_filter() {
    const dropdown = document.querySelector(".dropdown-content");
    dropdown.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            const genre = event.target.textContent;
            const filteredGames = games.filter(game => game.genre === genre);
            Adding_games(added_games,filteredGames);
        }
    });
}

// <-----------------Generate Winkelmandje------------------>
function Winkelmandje() {

    let winkelmandje = document.getElementById("winkelmandje");
    let filteredGames = [];

    for (var i = 0; i < added_games.length; i++) {
        const game = games.find(game => game.title === added_games[i]);

        if (game) {
            filteredGames.push(game);
        }
    }

    Adding_games(added_games, filteredGames);
}

function Breken_prijs() {
    let total_price = 0;

    for (var i = 0; i < added_games.length; i++) {
        const game = games.find(game => game.title === added_games[i]);

        if (game) {
            total_price += game.price;
        }
    }
    return total_price
}