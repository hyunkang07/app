import { useContext } from 'react';
import AuthContext from './AuthContext';

function Header() {
  const { user, logout } = useContext(AuthContext);  // 가방에서 꺼내기

  return (
    <header>
      {user ? (  
        <>
          <p>환영합니다, {user.name}님!</p>  
          <button onClick={logout}>로그아웃</button>  
        </>
      ) : (
        <p>로그인되지 않았습니다.</p>
      )}
    </header>
  );
}

export default Header;