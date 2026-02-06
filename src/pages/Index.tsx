import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CarouselBolos from "@/components/CarouselBolos";
import CarouselDoces from "@/components/CarouselDoces";
import CarouselPersonalite from "@/components/CarouselPersonalite";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <CarouselBolos />
      <CarouselDoces />
      <CarouselPersonalite />
      <Testimonials />
      <CTASection />
      <Footer />
      <WhatsAppFloatButton />
    </main>
  );
};

export default Index;
