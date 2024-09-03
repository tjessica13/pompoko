

interface PokemonProps {
    pokemonList: any
}

const Pokemon = ({ pokemonList }: PokemonProps) => {

    return (
        <div>
            Pokemon Display Here
            <div>
                {
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