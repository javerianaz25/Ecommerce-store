const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const ProductModel = require('./models/Product');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/product", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.json(products);
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const products=[
  {
    
    Title:"Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.",
    Cat: 'Tablet',
    Price: '723',
},
{
    
    Title:"Tracker with IP67 Waterproof Pedometer Smart watch.",
    Cat: 'Smart Watch',
    Price: '168',
   
},
{
    
    Title:"Cancelling Headphones Wireless.",
    Cat: 'Headphone',
    Price: '49',
    
},
{
    
    Title:"Professional Camera 4K Digital Video Camera.",
    Cat: 'Camera',
    Price: '1049',
    
},
{
    
    Title:"Mini Portable PD 22.5W Fast Charging Powerbank.",
    Cat: 'Powerbank',
    Price: '49',
    
},
{
    
    Title:"CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.",
    Cat: 'Electronics',
    Price: '156',
    
},
{
    
    Title:"Playstation 4 2TB Slim Gaming Console.",
    Cat: 'Gaming',
    Price: '2098',
   
},
{
    
    Title:"Mini Portable Mobile Phone Powerbank for iphone.",
    Cat: 'Electronics',
    Price: '386',
   
},
{
    Title:"Microsoft Surface Pro 8-13' Touchscreen.",
    Cat: 'Tablet',
    Price: '693',
    
},
{
    Title:"Playstation 4 2TB Slim Gaming Console.",
    Cat: 'Gaming',
    Price: '5036',
    
},
{
    Title:"Echo Show 5 (2nd Gen) Adjustable Stand | Charcoal",
    Cat: 'Electronics',
    Price: '198',
},
{
    Title:"Echo Dot smart speaker",
    Cat: 'Electronics',
    Price: '793',
    
},
]
// API endpoint to get all products
app.get('/api/getallproducts', (req, res) => {
  res.json(products);
});



app.post('/createProduct', (req, res) => {
  ProductModel.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json({ error: err.message }));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
