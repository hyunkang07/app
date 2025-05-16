
import slideData from '../data/slideData'; // 데이터 가져오기
import Slide from '../components/Slide/Slide'; // Slide 컴포넌트 가져오기

function Main() {
  return (
    <div style={{ padding: '2rem' }}>
      {/* 슬라이드 데이터를 기반으로 Slide 컴포넌트를 여러 번 출력 */}
      {slideData.map((section, idx) => (
        <Slide
          key={idx}
          title={section.title} // 제목 전달
          items={section.items} // 항목들 전달
        />
      ))}
    </div>
  );
}

export default Main;