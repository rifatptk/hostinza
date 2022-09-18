import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import useTranslation from "next-translate/useTranslation";


export default function HomeSlider() {
  const { t } = useTranslation("common");


    const [imageIndex, setImageIndex] = useState(1);

    const Images = [
        {myImg: '/images/avatar-1-55x55.png', userName: 'Cecilia H King'}, 
        {myImg: '/images/avatar-2-55x55.png', userName: 'Richard I Jones'},
        {myImg: '/images/avatar-3-55x55.png', userName: 'Joe D Walczak'},
        {myImg: '/images/avatar-4-55x55.jpg', userName: 'John H Smith'},
    ]; 

    const settings = {
        Infinity: true,
        dots: false,
        arrows: false,
        lazyload: true,
        speed: 300,
        slidesToShow: 3,
        initialSlide: 1,
        centerMode: true,
        centerPadding: 0,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
              breakpoint: 1900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1535, //1400
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1,
              }
            },
            {
              breakpoint: 1300, //1400
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1,
              }
            },
            {
              breakpoint: 991, //1400
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              }
            },
            {
              breakpoint: 767, //480
              settings: {
                  arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    }

  return (
    <div className='bg-gradient-to-bl from-black via-dark-blue to-light-blue w-full homeSlider'>
      <div className='container w-full items-center mx-auto'>
        <div className='px-5 md:px-10 py-16 w-full mx-auto'>
            <Slider {...settings}>
                {
                    Images.map((imag, idx) => (
                        <div className={`sliderCard h-full min-h-40 w-[85%] mx-auto max-w-[250px] md:max-w-[350px] bg-white p-5 md:p-10 rounded-lg ${idx === imageIndex ? 'slide activeSlide' : 'slide'}`} key={idx}>
                            <div className='flex flex-col align-middle w-full'>
                                <p className='text-gray-600 text-left text-sm md:text-base mb-10'>
                                    {t("Our best-in-class WordPress solution with additio nal optiz ation to make an running a WooCommerce")}
                                </p>
                                <div className='flex flex-row w-full align-middle justify-around'>
                                    <Image className='rounded-full w-14 h-14' src={imag.myImg} alt='ImageSlider' width={55}
      height={55}/>
                                    <div className='flex flex-1 flex-col ml-3 justify-center'>
                                        <h3 className='font-semibold text-lg text-black'>
                                            {imag.userName}
                                        </h3>
                                        <p className='text-xs md:text-sm font-light text-gray-500'>
                                            {t("CEO Pranklin Agency")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
      </div>
    </div>
  )
}
