import React from "react"
import SwiperCore, { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Avatar} from '@material-ui/core'

// Import Swiper styles
import "swiper/swiper-bundle.min.css"
SwiperCore.use([Navigation, Pagination])



const Banner = ({banners}) => {
  return (
    <Swiper
      // spaceBetween={30}
      // navigation
      pagination={{ clickable: true }}
      autoplay={true}
      loop={true}
      slidesPerView={1}
      align-items= {{center: true}}
      centeredSlides={true}
      
    >
      {
        banners.map(item=>(
          <SwiperSlide style={{height:522}}>
            {/* <Image */}
            {/* <Avatar src= {item.image} sizes={}/> */}
            <img src= {item} style={{objectFit:'cover',width:'100%'}}/>
          </SwiperSlide>
        ))
      }
     
    </Swiper>
  )
}

export default Banner
