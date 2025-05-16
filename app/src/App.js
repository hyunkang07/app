import { useState } from "react";
import ThemeContext from './ThemeContext';
import Page from "./Page";

function App() {
  // theme 상태를 useState로 관리를 함
  // 현재 기본 값은 light
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
  // toggleTheme 함수 : 현재 theme가 light 면 , 'dark'로 ,
  // 아니면 light
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    // themeContent.Provider로 묶게 되면 
    // 하위 컴포넌트에 theme와 toggleTheme 를 전달
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div style={{
        background: theme === 'light' ? '#fff':'#333',
        color: theme ==='light' ? '#000' : '#fff',
        minHeight: '100vh',
        padding: '2rem',
      }}>
        <Page />
      </div>
    </ThemeContext.Provider>
  )

}

export default App;