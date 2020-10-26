import app from "./app";
import http from "http";
import {models, sequelize} from './config/sequelize';

http.createServer(app);

const eraseDatabaseOnSync = true;

const createUsersWithMessages = async () => {
    await models.User.create(
        {
            username: 'rwieruch',
            messages: [
                {
                    text: 'Published the Road to learn React',
                },
            ],
        },
        {
            include: [models.Message],
        },
    );

    await models.User.create(
        {
            username: 'ddavids',
            messages: [
                {
                    text: 'Happy to release ...',
                },
                {
                    text: 'Published a complete ...',
                },
            ],
        },
        {
            include: [models.Message],
        },
    );
};

sequelize.sync({force:eraseDatabaseOnSync}).then(() => {
    if (eraseDatabaseOnSync) {
        createUsersWithMessages();
    }

    app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port ${process.env.PORT}!`)
    });
});

