import React, { FC, useEffect, useState } from 'react';

const Users: FC = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`http://localhost:8000/api/users`);
            // eslint-disable-next-line no-return-await
            console.log('response', response);
            const usersData = await response.json();
            setUsers(usersData);
        };

        fetchUser();
    }, []);
    console.log('users', users);
    return (
        <div>
            {users.map(({ name, email }) => (
                <>
                    <span>{name}</span>
                    <span>{email}</span>
                </>
            ))}
        </div>
    );
};

export default Users;
