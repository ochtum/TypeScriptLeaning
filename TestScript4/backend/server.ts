import express, {Express, Request, Response} from 'express';
import { Todo } from '../types';
import cors from 'cors';

const app: Express = express();
const port = 3000;

app.use(cors());

const sampleData = [
    {id: 1, title: 'Create a todo app', completed: false},
    {id: 2, title: 'Learn TypeScript', completed: false},
    {id: 3, title: 'Profit', completed: false},
];

let todos: Todo[] = sampleData;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.get('/todos', (req: Request, res: Response) => {
    res.json(todos);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
