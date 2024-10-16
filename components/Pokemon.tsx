

// props for the pokemon component to use
interface PokemonProps {
    // list from the api
    pokemonList: any
}

const Pokemon = ({ pokemonList }: PokemonProps) => {

    return (
        <div>
            Pokemon Display Here
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