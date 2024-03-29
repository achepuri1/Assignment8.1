const express = require('express'); 
const app = express();
const port = 3000;

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');

const options ={
    swaggerDefinition: {
        info: {
            title: 'Personal budget API',
            version: '1.0.0',
            description: 'Personal Budget Api autogenerated by'
        
        },
        host: 'localhost:3000',
        basePath: '/',

    },
    apis: ['./server.js'],
};
const specs = swaggerJsdoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(cors());
const prices ={
    food: [
        {
            name: 'apple',
            price: 1,
        },
        {
            name: 'orange',
            price: 2, 
        },
        {
            name: 'banana',
            price: 3, 
        },

    ]
};

/**
 * @swagger
 * /prices:
 *     get:
 *       description:Return all prices
 *       produces:
 *           - application/json
 *       responses:
 *           200:
 *               description: Object food containing array of food objects with all prices
 */
app.get('/prices', (req, res) => {
   
    res.json(prices);
});
 app.listen(port, () => {
    console.log('API served at http://localhost:${port}');
 })

