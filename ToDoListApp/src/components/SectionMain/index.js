function SectionMain({toDoList, setToDoList}){
    const handleChange = (event) => {
        let liElement = document.getElementById(event.target.name);
        const newList = [...toDoList];
        newList.forEach((toDoItem) => {

            if (toDoItem.id === parseInt(event.target.name)){
                toDoItem.completed = event.target.checked
            };
        });
        
        setToDoList(newList);

        if(event.target.checked){
            liElement.className = "completed";
        }
        else {
            liElement.className = "";
        }
    };

    const destroyToDoElement = (event) => {
        let name = event.target.name;
        setToDoList(toDoList.filter((toDoItem) => toDoItem.id !== parseInt(name)));
    };

    return(
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>
            <ul className="todo-list">
            {
                toDoList.map((toDoItem) => {
                    return(
                        <li id={toDoItem.id} key={toDoItem.id}>
                            <div className="view">
                                <input id={`input${toDoItem.id}`} name={toDoItem.id} className="toggle" type="checkbox" onChange={handleChange}/>
                                <label>{toDoItem.value}</label>
                                <button name={toDoItem.id} className="destroy" onClick={destroyToDoElement}></button>            
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        </section>
    );
}

export default SectionMain;