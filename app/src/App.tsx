import React, { FC } from 'react';
import Users from './User';

type AppTitleProps = {
    title: string;
};
const App: FC<AppTitleProps> = ({ title }) => {
    return (
        <>
            <div>{title}</div>
            <Users />
        </>
    );
};

export default App;
