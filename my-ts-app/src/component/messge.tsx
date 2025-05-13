import React from 'react';

interface WelcomeMessageProps{
    name : string; // name은 String 타입로 전달
}

const WelcomeMessage:React.FC<WelcomeMessageProps> = ({name}) => {
    return (
        <div>
            <h1>안녕하세요, {name}님!</h1>
        </div>
    )
}

export default WelcomeMessage;