import BestSellers from "@/features/home/components/BestSellers";
import Hero from "@/features/home/components/Hero";

export default async function Home() {
  
  return (
    <main>
      <Hero />
      <BestSellers />
    </main>
  );
}
