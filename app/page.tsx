import HomePageBanner from "./components/home-page/HomePageBanner";
import PropertySearch from "./components/home-page/PropertySearch";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full">
        <HomePageBanner />
        <PropertySearch />
    </div>
  );
};

export default HomePage;
