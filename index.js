const express = require('express');
const app = express();
const cors = require('cors');
const cookieParcer = require('cookie-parser')
const ENV = require("dotenv")
ENV.config()

require('./data/db')

app.use(express.json());
app.use(cookieParcer())


app.use(cors({
    credentials: true,// cookie-ni serverga yuborishni tasdiqlash
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'], // bu hammasi frontendga yuborilgan methodlarni qo'shadi
    allowedHeaders: ['Content-Type', 'authorization'] // bu hammasi serverga yuborilgan headersni qo'shadi
}));


app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the User API!',
    });
});


const router = require('./routes/product_route');
const cartrout = require('./routes/cart_rout');
const user = require('./routes/user_rout');
const favourite = require('./routes/favourite_rout');
const story = require('./routes/story_rout');

app.use('/api/products', router);
app.use('/api/cart', cartrout);
app.use('/api/users', user);
app.use('/api/favourite', favourite);
app.use('/api/story', story);





const PORT = 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));