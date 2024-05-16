function Footer({toDoList, setToDoList}){

    const handleClickClearCompleted = () => {
        setToDoList(toDoList.filter((toDoItem) => 
            {
                let inputElement = document.getElementById(`input${toDoItem.id}`);
                inputElement.checked = false;
                return !toDoItem.completed
            })
        );
    };

    const handleClickAll= (event) => {
        toDoList.forEach((toDoItem) => {
            const liElement = document.getElementById(toDoItem.id);
            liElement.style.display = "block";
        });

        makeSelected(event.target.name);
    }

    const handleClickActive = (event) => {
        toDoList.forEach((toDoItem) => {
            const liElement = document.getElementById(toDoItem.id);
            
            if(toDoItem.completed){
                liElement.style.display = "none";
            }
            else{
                liElement.style.display = "block";
            }
        });

        makeSelected(event.target.name);
    }

    const handleClickCompleted = (event) => {
        toDoList.forEach((toDoItem) => {
            const liElement = document.getElementById(toDoItem.id);

            if(!toDoItem.completed){
                liElement.style.display = "none";
            }
            else{
                liElement.style.display = "block";
            }
        });

        makeSelected(event.target.name);
    }

    const makeSelected = (eventTargetName) => {
        const ulElement = document.querySelector(".filters");

        ulElement.childNodes.forEach((liElement) => {
            if(liElement.firstChild.name === eventTargetName){
                liElement.firstChild.className = "selected";
            }
            else{
                liElement.firstChild.className = "";
            }
        })
    };

    return(
        <footer className="footer">
                <span className="todo-count">
                    <strong>{toDoList.length} </strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <a href="#/" name="All" className="selected" onClick={handleClickAll}>All</a>
                    </li>
                    <li>
                        <a href="#/" name="Active" onClick={handleClickActive}>Active</a>
                    </li>
                    <li>
                        <a href="#/" name="Completed" onClick={handleClickCompleted}>Completed</a>
                    </li>
                </ul>

                <button className="clear-completed" onClick={handleClickClearCompleted}>Clear completed</button>
            </footer>
    );
}

export default Footer;