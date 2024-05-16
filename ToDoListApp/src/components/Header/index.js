import { useState } from "react";

function Header({inputContent, setInputContent, toDoList, setTodoList}){
    const [idCounter, setIdCounter] = useState(0);

    const handleChange = (event) => {
        setInputContent(event.target.value);
    };

    const handleKeyDown = (event) => {
        if(event.key === "Enter"){
            // console.log("Enter key pressed!");
            if(event.target.value === ""){
                return;
            }

            setTodoList([...toDoList, {id: idCounter, value: event.target.value, completed: false}])
            setIdCounter(idCounter + 1);
            setInputContent("");
        }
    };
    return (
        <header className="header">
            <h1>To Do List</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus onChange={handleChange} onKeyDown={handleKeyDown} value={inputContent}/>
        </header>
    );
}

export default Header;