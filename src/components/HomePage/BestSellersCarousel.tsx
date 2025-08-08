import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {Link} from 'react-router-dom'



const BestSellersCarousel = () => {
  return (
    <div className="bg-white py-6 px-4 rounded-xl mt-6 shadow-sm">
      <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-800">Best Sellers</p>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 7 },
        }}
      >
        {Array.from({ length: 14 }, (_, i) => (
          <SwiperSlide key={i}>
            <Link to={`/product/${i}`} className="flex items-center justify-center">
              <div className="w-[140px] h-[200px] sm:w-[160px] sm:h-[220px] md:w-[180px] md:h-[240px] lg:w-[200px] lg:h-[260px] bg-white rounded-lg shadow-sm overflow-hidden flex items-center justify-center transition-transform duration-200 hover:scale-105">
                <img
                  src={`/images/product_${i}_small.jpg`}
                  alt={`Product ${i}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};



export default BestSellersCarousel