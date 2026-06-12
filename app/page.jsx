import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Transport from "@/components/Transport";
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
        <Transport />
        <Fleet />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
