import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { createSearchParams, useNavigate } from "react-router-dom";
import { SearchCategories } from "../../data/SearchCategories";
import type { SearchCategory } from "../../types/Types";



const CategoriesCarousel = () => {
  const navigate = useNavigate();

  const searchCategory = (category: string) => {
    navigate({
      pathname: "search",
      search: createSearchParams({
        category: category,
        searchTerm: "",
      }).toString(),
    });
  };

  return (
    <div className="bg-white mt-10 px-4 py-8 rounded-xl shadow-sm">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-800">Shop by Category</h2>

      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        centeredSlides={false}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 5 },
        }}
      >
        {SearchCategories.slice(1, SearchCategories.length - 1).map((category: SearchCategory, i: number) => (
          <SwiperSlide key={i}>
            <div
              onClick={() => searchCategory(category.title)}
              className="cursor-pointer flex items-center justify-center"
            >
              <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] hover:bg-gray-200 transition-all duration-200 shadow-md overflow-hidden flex items-center justify-center">
                <img
                  src={category.imgUrl}
                  alt={category.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};






export default CategoriesCarousel