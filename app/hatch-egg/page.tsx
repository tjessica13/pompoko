import Link from "next/link";
import Image from 'next/image';
import ImageLoaderComponent from "@/components/ImageLoaderComponent";
import { Jersey_10 } from 'next/font/google';

const jersey = Jersey_10({ 
  weight: ['400'],
  subsets: ['latin']
});

export default async function Home() {

  //path for which image to load
  let imgSource = '/images/egg_png.png';

  return (
    <main className="hatch-egg">
        <div className="pokemon-element">
                <div className="egg-image">
                    <ImageLoaderComponent link= {imgSource}/>
                </div>
                <div className="egg-base">
                    <Image alt="pokemon base" src="/images/Group 6.png" width={450} height={100}></Image>
                </div>
            </div>
        <h1 className={jersey.className}>Oh?</h1>
        <Link href="/"><p className={jersey.className}>Continue</p></Link>
    </main>
  );
}
