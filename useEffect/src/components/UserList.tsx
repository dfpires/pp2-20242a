import { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const usernames = data.map((user: any) => user.name + " - " + user.email);
                setUsers(usernames);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar os usuários:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Carregando usuários...</p>;
    }

    return (
        <div>
            <h2>Lista de Usuários</h2>
            <ul>
                {users.map(user => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;