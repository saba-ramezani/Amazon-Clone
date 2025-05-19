import { homePageCards } from "../data/HomePageCards"
import BestSellersCarousel from "./BestSellersCarousel"
import Carousel from "./Carousel"
import HomePageCard from "./HomePageCard"

const HomePage = () => {
  return (
    <div className="bg-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto ">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-[20px] w-full  p-[10px] -mt-70">
          {homePageCards.map(({title, image, link}, i) => 
            (<HomePageCard title={title} image={image} link={link} />))
          }
        </div>
        <BestSellersCarousel />
      </div>
    </div>
  )
}

export default HomePage