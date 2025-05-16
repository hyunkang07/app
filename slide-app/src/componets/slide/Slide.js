import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper 컴포넌트 import
import 'swiper/css'; // Swiper 기본 스타일 import

function Slide({ title, items }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      {/* 섹션 제목 출력 */}
      <h2>{title}</h2>

      {/* Swiper 시작 */}
      <Swiper spaceBetween={10} slidesPerView={3}>
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            {/* 각 슬라이드 안에 들어갈 카드 UI */}
            <div
              style={{
                padding: '1rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: '#fff',
              }}
            >
              {/* 상품 이미지 */}
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', borderRadius: '8px' }}
              />
              {/* 상품 제목 */}
              <p style={{ marginTop: '0.5rem' }}>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slide;