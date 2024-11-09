

// props for the pokemon component to use
interface PokemonProps {
    // list from the api
    pokemonList: any
}

const Pokemon = ({ pokemonList }: PokemonProps) => {

    // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    // https://www.w3schools.com/js/js_random.asp
    // function for generating a random number between 1 and 151
    function getRandomNumber() {
        return Math.floor(Math.random() * 151) + 1;
    }

    return (
        <div>
            Pokemon Display Here
            <div>{getRandomNumber()}</div>
            <div>
                {
                    
                    // print out 151 pokemon names
                    pokemonList.map((pokemon : any) => {
                        return (
                            <p key={pokemon.name}>{pokemon.name}</p>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Pokemon;