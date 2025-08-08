import { homePageCards } from "../../data/HomePageCards"
import BestSellersCarousel from "./BestSellersCarousel"
import Carousel from "./Carousel"
import CategoriesCarousel from "./CategoriesCarousel"
import HomePageCard from "./HomePageCard"

const HomePage = () => {
  return (
    <div className="bg-background relative">
      <div className="w-full max-w-[1500px] mx-auto">
        <Carousel />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-4 mt-[30px]">
          {homePageCards.map(({ title, image, link }, i) => (
            <HomePageCard key={i} title={title} image={image} link={link} />
          ))}
        </div>
        <BestSellersCarousel />
        <CategoriesCarousel />
        <div className="mt-5 px-4">
          <img
            src="/images/banner_image.jpg"
            className="w-full h-auto object-cover rounded-lg"
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
};


export default HomePage