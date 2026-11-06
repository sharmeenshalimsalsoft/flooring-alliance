import { commercialFlooringOptions } from "../../data/commercialFlooringOptions";
import FlooringInteractiveSection from "./FlooringInteractiveSection";

type Props = {
  /** When used as a page hero, use h1 */
  asPageHero?: boolean;
};

export default function CommercialFlooring({ asPageHero = false }: Props) {
  return (
    <FlooringInteractiveSection
      options={commercialFlooringOptions}
      ariaLabel="Interactive commercial flooring styles"
      titleAs={asPageHero ? "h1" : "h2"}
      eagerFirst={asPageHero}
      className="h-[100svh] min-h-[640px]"
    />
  );
}
