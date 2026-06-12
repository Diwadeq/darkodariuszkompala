import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
