import CTA from "./sections/CTA";
import Facts from "./sections/Facts";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Integrations from "./sections/Integrations";
import Pricing from "./sections/Pricing";
import Services from "./sections/Services";
import Testimonail from "./sections/Testimonial";
import WorkProcess from "./sections/WorkProcess";

export default function App() {
  return (
    <main className="font-dm-sans pb-[100px]">
      <Hero />
      <WorkProcess />
      <Features />
      <Integrations />
      <Services />
      <Facts />
      <Pricing />
      <Testimonail />
      <CTA />
      <Footer />
    </main>
  );
}
