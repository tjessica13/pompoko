import Image from "next/image";
import TimerComponent from "@/components/TimerComponent";
import Pokemon from "@/components/Pokemon";
import { getPokemonList } from "@/lib/pokemonAPI";
import ImageLoaderComponent from "@/components/ImageLoaderComponent";

export default async function Home() {

  const pokemonList = await getPokemonList();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Pokemon pokemonList={pokemonList} />
      <div>
        <TimerComponent time={305} />
      </div>
      <ImageLoaderComponent link= {"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif"}/>

    </main>
  );
}
