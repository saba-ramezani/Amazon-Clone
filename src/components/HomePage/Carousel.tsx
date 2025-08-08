import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay, Pagination } from 'swiper/modules';



const Carousel = () => {
  return (
    <div className="w-full h-[60vh] min-h-[300px] bg-white relative">
      <Swiper
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <img src="/images/carousel_1.jpg" className="w-full h-full object-cover" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel_2.jpg" className="w-full h-full object-cover" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel_3.jpg" className="w-full h-full object-cover" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <video
            controls
            muted
            className="w-full h-full object-cover"
          >
            <source src="/images/carousel_vid.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel_4.jpg" className="w-full h-full object-cover" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel_5.jpg" className="w-full h-full object-cover" alt="Slide 5" />
        </SwiperSlide>
      </Swiper>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-b from-transparent to-background z-10 pointer-events-none" />
    </div>
  );
};


export default Carousel