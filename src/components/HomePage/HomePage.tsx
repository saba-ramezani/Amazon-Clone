import { homePageCards } from "../../data/HomePageCards"
import BestSellersCarousel from "./BestSellersCarousel"
import Carousel from "./Carousel"
import CategoriesCarousel from "./CategoriesCarousel"
import HomePageCard from "./HomePageCard"

const HomePage = () => {
  return (
    <div className="bg-background relative">
      <div className="min-w-[1000px] max-w-[1500px] m-auto ">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-[20px] w-full  p-[10px] -mt-70">
          {homePageCards.map(({title, image, link}, i) => 
            (<HomePageCard key={i} title={title} image={image} link={link} />))
          }
        </div>
        <BestSellersCarousel />
        <CategoriesCarousel />
        <div className="mt-[20px]">
          <img src="/images/banner_image.jpg" className="object-cover" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomePage