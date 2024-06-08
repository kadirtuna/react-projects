import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function User(){
    const { id } = useParams();
    const [ user, setUser ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ isFound, setIsFound ] = useState(false);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users/' + id)
            .then(res => {
                setUser(res.data);
                setIsFound(true);
            })
            .catch(() => setIsFound(false))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <div>
            <h2>User Detail</h2>
            {loading && <p>Loading...</p>}
            {!loading && !isFound && <p>User not found!</p>}
            {!loading && isFound &&
            <div>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>E-mail: {user.email}</p>
                <Link to={`/users/${parseInt(id) + 1}`}>Next User ({parseInt(user.id) + 1})</Link>
            </div>
            }
        </div>
    );
    
}