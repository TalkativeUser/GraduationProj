// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Home.scss";

interface IProps {
  title: string;
  desc: string;
}

const Home = ({}: IProps) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      
    >
      <SwiperSlide>
        <img
          src="./images/153109_large-kolagra-desktop-size.webp"
          alt=""
          width={"800px"}
          className="mx-auto rounded-lg "
          height={"200px"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="./images/153241_large-ginipin-desktop-size.webp" //https://misr-online.com/media/weltpixel/owlcarouselslider/images/1/5/153109_large-kolagra-desktop-size.jpg
          alt=""
          width={"800px"}
          className="mx-auto rounded-lg "
          height={"200px"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="./images/105720_capixy_cover.webp"
          alt=""
          width={"800px"}
          className="mx-auto rounded-lg "
          height={"200px"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="./images/094302_cleo-desktop-size.webp"
          alt=""
          width={"800px"}
          className="mx-auto rounded-lg "
          height={"200px"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="./images/112934_Desktop-size-AR.webp"
          alt=""
          width={"800px"}
          className="mx-auto rounded-lg "
          height={"200px"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="./images/124248_Egypt-Soralone.webp"
          alt=""
          width={"800px"}
          className="mx-auto rounded-lg "
          height={"200px"}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;
