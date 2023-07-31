{/* <div id="joke" class="joke" > Awesome Joke Is Loading...</div>
        <button id="jokeBtn" class="btn">Next Joke</button> */}

// https://icanhazdadjoke.com/
const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn')

const generateJokes = () => {

    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', setHeader)
        .then((res) =>res.json() )
        .then((data) => {
            jokes.innerHTML = data.joke
        }).catch((error) => {
            console.log(error);
        })
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();