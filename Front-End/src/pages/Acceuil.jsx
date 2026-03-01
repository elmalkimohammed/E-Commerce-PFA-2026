import TopNav from "../Components/navbarComponent/TopNav";
import TopSection from "../Components/navbarComponent/TopSection";
import ProductHolder from "../Components/SectionComponent/ProductHolder";
import FeaturesBar from "../Components/SectionComponent/FeaturesBar";
import Footer from "../Components/EndbarComponenet/Footer";

function Acceuil() {
  return (
    <div>
      <TopNav />
      <TopSection />
      <ProductHolder />
      <FeaturesBar />
      <Footer />
    </div>
  );
}

export default Acceuil;
