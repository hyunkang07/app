import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Slide({ title, items }) {
  return (
    <div>
      <h2>{title}</h2>
      <Swiper spaceBetween={10} slidesPerView={3}>
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slide;
