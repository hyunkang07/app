import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom"; 

const Home: React.FC = () =>{
   // const navigate = useNavigate();

    return(
        <div>
            <h1>HOME입니다😘</h1>
            <Link to="/About">
            <button>About으로 이동</button>
            </Link>
        </div>
    )
}

export default Home;