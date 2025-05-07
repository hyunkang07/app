import { useState, useRef } from 'react';

function ClickTracker() {
  const [count, setCount] = useState(0);     // 화면에 보이는 숫자
  const clickCount = useRef(0);              // 콘솔에 찍는 누적 클릭 수

  const handleClick = () => {
    setCount(count + 1);                     // 상태 업데이트 → 화면에 숫자 증가
    clickCount.current += 1;                 // 렌더링 없이 값 저장
    console.log(`총 클릭 횟수: ${clickCount.current}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>📈 숫자: {count}</h2>
      <button onClick={handleClick}>+1 버튼</button>
    </div>
  );
}

export default ClickTracker;