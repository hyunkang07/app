import { useState } from 'react';
import AuthContext from './AuthContext';
import Header from './Header';
import Page from './Page';

function App(){
  const [user,setUser] = useState(null);
  // 로그인 되어 있는 상태를 저장

  const login = () => {
    setUser({ name: '홍길동', email: 'hong@example.com' });
  };
  const logout = () => {
    setUser(null);
  };
  return(
    <AuthContext.Provider value={{ user, login, logout }}>
      <Header />
      <Page />
    </AuthContext.Provider>
  )
}

export default App;