import BannerSection from "./bannerSection/BannerSection";
import DevInfoSection from "./devInfoSection/DevInfoSection";
import SuccessStoriesSection from "./successStoriesSection/SuccessStoriesSection";
import TechnologiesSection from "./technologiesSection/TechnologiesSection";

const Home = () => {
  return (
    <>
      <BannerSection />
      <SuccessStoriesSection />
      <DevInfoSection />
      <TechnologiesSection />
    </>
  );
};

export default Home;
