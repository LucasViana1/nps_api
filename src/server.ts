import express from 'express';

const app = express();

app.get('/user', (request, response) => {
    return response.json({ message:'ok' });
})

app.listen(3333, () => console.log('Server is running...'));