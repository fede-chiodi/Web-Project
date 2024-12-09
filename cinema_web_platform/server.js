import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import router from './routes.js';
import sequelize from './connection.js';
import { init_transporter } from './mailer_system.js';
// import {create_movies} from './models/Movie.js';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

// configuring database connection

const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        // await create_movies();
        init_transporter();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testDbConnection().then(() => {
    app.listen(port, () => {
        console.log(`Server in esecuzione su http://localhost:${port}`);
    });
})

