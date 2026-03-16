import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expeditions from "@/components/Expeditions";
import Arrival from "@/components/Arrival";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Expeditions />
      <Arrival />
      <Footer />
    </main>
  );
}
