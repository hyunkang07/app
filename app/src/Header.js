import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Header(){
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <header>
            <p>현재 테마 {theme}</p>
            <button onClick={toggleTheme}>테마 전환</button>
        </header>
    )
}

export default Header;