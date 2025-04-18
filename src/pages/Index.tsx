import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Benefits from "@/components/home/Benefits";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;