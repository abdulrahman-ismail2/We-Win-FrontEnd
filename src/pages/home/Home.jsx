import MainLinks from "../../components/MainLinks";
import Discover from "./content/Discover";
import Landing from "./content/Landing";
import ProductsSection from "./content/ProductsSection";
import Slider from "./content/Slider";

export default function Home() {
  return (
    <div>
      <MainLinks />
      <Landing />
      <Slider />
      <ProductsSection />
      <Discover />
    </div>
  );
}
