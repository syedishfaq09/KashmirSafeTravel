import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import PopularDestinations from "../components/PopularDestinations";
import FeaturedHotels from "../components/FeaturedHotels";
import FeaturedTourPackages from "../components/FeaturedTourPackages";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <PopularDestinations />
      <FeaturedHotels />
      <FeaturedTourPackages />
      <Footer />
    </>
  );
}

export default Home;
