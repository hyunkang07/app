import React from 'react';

interface WelcomeMessageProps{
    name : number; // 2 name은 String 
}

const WelcomeMessage:React.FC<WelcomeMessageProps> = ({name}) => {
    return <button style={{
        backgroundColor:'gold',
        padding:'10px 20px',
        fontSize: '18px'
    }}>{name}</button>
}

export default WelcomeMessage;