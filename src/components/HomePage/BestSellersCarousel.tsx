import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import {Link} from 'react-router-dom'



const BestSellersCarousel = () => {
  return (
    <div className=" bg-white py-[20px] px-[10px] rounded-[10px] mt-[10px]">
        <p className="text-3xl ml-[20px] mb-[20px] font-semibold">Best Sellers</p>
        <Swiper 
        className=" !pt-[10px]"
            slidesPerView={7}
            navigation={true}
            modules={[Navigation]}
            spaceBetween={5}
        >
            {
                Array.from({length: 14}, (_, i) => 
                    <SwiperSlide className="hover:scale-[110%]">
                        <Link to={`/product/${i}`}>     
                            <img src={`/images/product_${i}_small.jpg`} alt="" />
                        </Link>
                    </SwiperSlide>
                )
            }
        </Swiper>
    </div>
  )
}

export default BestSellersCarousel