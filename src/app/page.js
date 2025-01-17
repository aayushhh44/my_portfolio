import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

// export const runtime = "edge";

export default function Home() {
  return (
    <main className="dark:bg-[#1a1a1a]">
      <Navbar/>
      <Hero />
      <Footer/>
    </main>
  );
}
