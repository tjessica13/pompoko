import Image from "next/image";
import TimerComponent from "@/components/TimerComponent";
import Pokemon from "@/components/Pokemon";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {

  // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    // https://www.w3schools.com/js/js_random.asp
    // function for generating a random number between 1 and 151
    function getRandomNumber() {
      return Math.floor(Math.random() * 151) + 1;
  }

  const pokemon_num = getRandomNumber()
  const pokemon = await getPokemonList(pokemon_num);
  console.log(pokemon)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Pokemon pokemon={pokemon}/>
      <div>
        <TimerComponent time={5} />
      </div>

    </main>
  );
}
