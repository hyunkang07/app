import React from "react";
import { useNavigate } from "react-router-dom"; 

const Home: React.FC = () =>{
    const navigate = useNavigate();

    return(
        <div>
            <h1>HOME입니다😘</h1>
            <button onClick={() => navigate('/About')}>About으로 이동</button>
        </div>
    )
}

export default Home;