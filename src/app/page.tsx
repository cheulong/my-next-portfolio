import Image from "next/image";
import Hero from "./(sections)/Hero";

export default function Home() {
  return (
    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      <Hero/>
    </main>
  );
}
