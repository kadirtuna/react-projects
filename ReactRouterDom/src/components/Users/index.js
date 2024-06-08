import { NavLink, Route, Routes, useLocation} from "react-router-dom"; 
import { useState, useEffect } from "react";
import User from "../User";
import axios from "axios";

export default function Users(){
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const location = useLocation();
    
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .finally(() => setLoading(false));
    }, []);
    
    return (
        <div>
            <h2>Users</h2>
            {loading && <p>Loading...</p>}
            <ul>
                {
                    users.map(user => {
                        return (
                            <li key={user.id}>
                                <NavLink to={`${user.id}`}>{user.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>

            <Routes>
                <Route path="/" element={<h3>Please select a user</h3>} />
                <Route path={`/:id`} element={<User />} />
                <Route path="*" element={<p>Trial</p>}/>
            </Routes>
        </div>
    );
}