import React, { FC, useEffect, useState } from 'react';

const Users: FC = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUser = async () => {
            console.log(`${process.env.REACT_APP_API_URL}users`);
            const response = await fetch(`${process.env.REACT_APP_API_URL}users`);
            // eslint-disable-next-line no-return-await
            const usersData = await response.json();
            setUsers(usersData);
        };

        fetchUser();
    }, []);
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
