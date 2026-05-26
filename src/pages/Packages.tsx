import { CustomCursor } from "@/components/CustomCursor";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Navbar } from "@/components/Navbar";
import { PackagesSection } from "@/components/sections/PackagesSection";

const Packages = () => (
  <>
    <GrainOverlay />
    <CustomCursor />
    <Navbar scrolled={false} />

    <main className="packages-page">
      <PackagesSection
        eyebrow="Compare Tiers"
        title="PICK THE LANE THAT FITS YOUR CONTENT VOLUME."
        lead="A simplified pricing wall for quick comparison. Each card focuses on output, planning support, delivery speed, and price."
      />
    </main>
  </>
);

export default Packages;
