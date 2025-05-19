import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay, Pagination } from 'swiper/modules';



const Carousel = () => {

  return (
    <div className="h-[600px] bg-white">
        <Swiper 
            loop={true} 
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}

            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-[50%]"
        >
            <SwiperSlide>
                <img src={"/images/carousel_1.jpg"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={"/images/carousel_2.jpg"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={"/images/carousel_3.jpg"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <video controls muted={true}>
                    <source src="/images/carousel_vid.mp4" type="video/mp4" />
                </video>
            </SwiperSlide>
            <SwiperSlide>
                <img src={"/images/carousel_4.jpg"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={"/images/carousel_5.jpg"} alt="" />
            </SwiperSlide>
        </Swiper>
        <div className="h-[50%] bg-gradient-to-b from-black to-background" />
    </div>
  )
}

export default Carousel