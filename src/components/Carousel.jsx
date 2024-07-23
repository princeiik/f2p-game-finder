import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Carousel({ images }) {

    return (
        <Swiper
            navigation
            loop={true}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination]}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className='flex items-center justify-center'>
                        <img className='block w-3/4 rounded-md' src={image.image} alt="" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
    
}

export default Carousel