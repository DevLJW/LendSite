import Slider from "react-slick";
// yarn add --dev @types/react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderItem, Wrapper } from "./LayoutBanner.styles";

export default function LayoutBannerUI() {
  //슬라이더 세팅1
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/banner/NewSeasonBanner.jpg" />
        </div>
        <div>
          <SliderItem src="/images/banner/NewArrivalsBanner.jpg" />
        </div>
        <div>
          <SliderItem src="/images/banner/NewSeasonBanner.jpg" />
        </div>
        <div>
          <SliderItem src="/images/banner/NewArrivalsBanner.jpg" />
        </div>
        <div>
          <SliderItem src="/images/banner/NewSeasonBanner.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
