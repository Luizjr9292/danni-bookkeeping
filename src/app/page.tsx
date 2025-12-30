import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { VirtualAdvantage } from "@/components/sections/VirtualAdvantage";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustBar />
      <Services />
      <VirtualAdvantage />
      <Process />
      <About />
      <Contact />
    </div>
  );
}
