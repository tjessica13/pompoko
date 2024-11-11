import Image from "next/image";

// props for the pokemon component to use
interface PokemonProps {
    // list from the api
    pokemon : any
}

const Pokemon = ({pokemon} : PokemonProps) => {

    return (
        <div>
            Pokemon Display Here
            <div>{pokemon}</div>
        </div>
    );
}

export default Pokemon;