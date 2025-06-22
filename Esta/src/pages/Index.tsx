import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturedProperties from "@/components/FeaturedProperties";
import MapSection from "@/components/MapSection";
import BudgetCalculator from "@/components/BudgetCalculator";
import VirtualTours from "@/components/VirtualTours";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <FeaturedProperties />
      <MapSection />
      <BudgetCalculator />
      <VirtualTours />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
