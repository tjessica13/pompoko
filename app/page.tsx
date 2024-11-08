import Image from "next/image";
import TimerComponent from "@/components/TimerComponent";
import Pokemon from "@/components/Pokemon";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {

  const pokemonList = await getPokemonList();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Pokemon pokemonList={pokemonList} />
      <div>
        <TimerComponent time={305} />
      </div>

    </main>
  );
}
