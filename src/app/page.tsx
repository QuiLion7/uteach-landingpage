import FloatingElements from "@/components/FloatingElements";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";
import Students from "@/components/Students";
import Reports from "@/components/Reports";
import Specifications from "@/components/Specifications";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen mt-16">
      <Header />
      <Specifications />
      <Reports />
      <Students />
      <StatsSection />
      <Testimonials />
      <Features />
      <FloatingElements />
      <Contact />
    </div>
  );
}
