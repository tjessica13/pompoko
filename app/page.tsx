import Image from "next/image";
import TimerComponent from "@/components/TimerComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <TimerComponent time={305} />
      </div>
    </main>
  );
}
