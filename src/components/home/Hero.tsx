import { flooringOptions } from "../../data/flooringOptions";
import FlooringInteractiveSection from "./FlooringInteractiveSection";

export default function Hero() {
  return (
    <FlooringInteractiveSection
      options={flooringOptions}
      ariaLabel="Interactive residential flooring styles"
      titleAs="h1"
      eagerFirst
      className="h-[100svh] min-h-[640px]"
    />
  );
}
