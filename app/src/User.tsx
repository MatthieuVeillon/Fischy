import React, { FC, useEffect, useState } from 'react';

const Users: FC = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUser = async () => {
            const url = process.env.REACT_APP_API_URL
                ? `${process.env.REACT_APP_API_URL}users`
                : 'http://www.test-mv.com/api/users';

            const response = await fetch(url);
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
