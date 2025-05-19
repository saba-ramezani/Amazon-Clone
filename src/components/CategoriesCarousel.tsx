import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';



const CategoriesCarousel = () => {

  return (
    <div className=" bg-white mt-[20px] rounded-[10px] py-[20px] px-[10px]">
        <p className="text-3xl ml-[20px] mb-[20px] font-semibold">Shop by Category</p>
        <Swiper 
            slidesPerView={5}
            loop={true} 
            navigation={true}
            modules={[Pagination, Navigation]}
        >
            {
                Array.from({length: 6}, (_, i) => 
                    <SwiperSlide className="hover:scale-[110%]">
                        <img src={`/images/category_${i}.jpg`} alt="" />
                    </SwiperSlide>
                )
            }
        </Swiper>
    </div>
  )
}

export default CategoriesCarousel