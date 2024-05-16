import Header from '../Header';
import SectionMain from '../SectionMain';
import Footer from '../Footer';
import { useState } from "react";

function ToDoApp(){
    const [inputContent, setInputContent] = useState("");
    const [toDoList, setToDoList] = useState([]);

    return (
        <section className="todoapp">
            <Header 
                inputContent={inputContent} 
                setInputContent={setInputContent} 
                toDoList={toDoList} 
                setTodoList={setToDoList}
                />
            <SectionMain 
                inputContent={inputContent}
                toDoList={toDoList} 
                setToDoList={setToDoList}
                />
            <Footer
                toDoListLength={toDoList.length}
                toDoList={toDoList}
                setToDoList={setToDoList}
            />
        </section>
    )
}

export default ToDoApp;