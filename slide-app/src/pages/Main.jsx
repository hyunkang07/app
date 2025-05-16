import slideData from '../data/slideData';
import Slide from '../components/Slide/Slide';

function Main() {
  return (
    <div>
      {slideData.map((section, idx) => (
        <Slide key={idx} title={section.title} items={section.items} />
      ))}
    </div>
  );
}

export default Main;
