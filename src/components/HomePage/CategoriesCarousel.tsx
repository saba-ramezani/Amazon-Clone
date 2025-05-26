import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import { createSearchParams, useNavigate } from "react-router-dom";
import { SearchCategories } from "../../data/SearchCategories";
import type { SearchCategory } from "../../types/Types";



const CategoriesCarousel = () => {

    const navigate = useNavigate()

    const searchCategory = (category: string) => {
        navigate({
        pathname: "search",
        search:
            createSearchParams({
            category: `${category}`,
            searchTerm: ``
            }).toString(),
    })
    }

    console.log(SearchCategories.slice(1, SearchCategories.length - 1));

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
                SearchCategories.slice(1, SearchCategories.length - 1).map((category: SearchCategory, i: number) => 
                    {
                        return (
                            <SwiperSlide className="hover:scale-[105%] cursor-pointer" key={i} onClick={() => searchCategory(category.title)}>
                                <img src={category.imgUrl} alt="" />
                            </SwiperSlide>
                        )
                    }
                )
            }
        </Swiper>
    </div>
  )
}

export default CategoriesCarousel