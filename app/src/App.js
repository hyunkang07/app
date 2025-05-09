import { useState } from 'react';

function SimpletTodoItem(){
  const [isDone , setIsDone] = useState(false);
  
  const handleCheckboxChange=()=>{
    setIsDone(!isDone)
    // 체크할 때 마다 true / false 반전
  }

  return(
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        textDecoration: isDone ? 'line-through' : 'none',
      }}
    >
      <input type='checkbox'
      onChange={handleCheckboxChange}
      checked={isDone}/>
      <span>공부하기</span>
    </div>
  )

}

export default SimpletTodoItem;