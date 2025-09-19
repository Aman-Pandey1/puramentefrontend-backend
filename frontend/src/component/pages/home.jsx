import Carousel from "../Carousel/Carousel";
import Collection from "../product cart/collection";
import Topproduct from "../product cart/topproduct";
import InfoCards from "../newcomponent/info";
import WhoWeAre from "../newcomponent/woweare";
import HelpSection from "../newcomponent/help";
import Jewelryinfo from "../newcomponent/Jewelryinfo";
import VideoSection from "../newcomponent/youtubevideo";
import HomeProductCard from "../product cart/homeproduct";

import Faqsection from "../newcomponent/faq";
import { Helmet } from "react-helmet-async";
export default function Home() {
  return (
     <>
      <Helmet>
        <title>Jewelry Manufacturer & Wholesaler | Puramente Jewel</title>
        <meta
          name="description"
          content="Puramente Jewel International – trusted jewelry manufacturer & wholesaler. Finest necklaces, earrings, bracelets & more for France, UK, USA & Europe."
        />
        <meta
          name="keywords"
          content="Jewelry Manufacturer, Jewelry Wholesaler, Puramente Jewel, Necklace Earrings Bracelets, Jewelry Europe"
        />
        <link rel="canonical" href="https://puramentejewel.com/" />
      </Helmet>

      {/* Existing home page content */}
      
     

      {/* Rest of your home page */}
    
    <div>
      <Carousel />
      <h1 className="text-center text-3xl font-bold text-gray-900 mt-10 mb-6 capitalize">
        Welcome to Puramente Jewel
      </h1>
      <Collection />
      <HomeProductCard />
      <Topproduct />
      <WhoWeAre />
      <Jewelryinfo />
      <InfoCards />
      <VideoSection />
      <Faqsection/>
      <HelpSection />
    </div>
    </>
  );
}
