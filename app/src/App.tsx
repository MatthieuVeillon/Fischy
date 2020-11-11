import React, { FC } from 'react';

type AppTitleProps = {
    title: string;
};
const App: FC<AppTitleProps> = ({ title }) => {
    return <div>test {title}</div>;
};

export default App;
