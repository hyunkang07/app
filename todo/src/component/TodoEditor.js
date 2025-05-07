import './TodoEditor.css';
import { useState } from 'react';

const TodoEditor = ({onCreate}) =>{
    const [content, setConent] = useState("");
    const onChageCntent = (e) =>{
        setConent(e.target.value);
    } 
    return(
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기</h4>
            <div className="editor_wrapper">
                <input 
                value={content}
                onChange={onChageCntent}
                placeholder="새로운 리스트"/>
                 <button>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor;