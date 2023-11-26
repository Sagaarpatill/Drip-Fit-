require('dotenv').config({path:'../config.env'});
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Product = require("./Product");
const app = express()
const port = 3001

app.use(express.json())
app.use(cors({ 
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(require('./auth'));

const connection_url = process.env.MONGO_URL;


mongoose.connect(connection_url);


app.get("/",(req,res) => {res.send("Home page")
});


app.get("/product/get", async (req, res) => {
  try {
    const data = await Product.find({}).exec();
    res.status(200).send(data);
  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  }
});


app.get("/product/get/VanHeusen", async (req, res) => {
  try {
    const data = await Product.find({Brand:'Van Heusen'}).exec();
    res.status(200).send(data);

  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  }
});

app.get("/product/get/Levis", async (req, res) => {
  try {
    const data = await Product.find({Brand:'Levis'}).exec();
    res.status(200).send(data);

  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  }
});

app.get("/product/get/CalvinKlein", async (req, res) => {
  try {
    const data = await Product.find({Brand:'Calvin Klein'}).exec();
    res.status(200).send(data);

  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  }
});

app.get("/product/get/LV", async (req, res) => {
  try {
    const data = await Product.find({Brand:'Louis Vuitton'}).exec();
    res.status(200).send(data);

  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  }
});


app.get("/product/get/Puma", async (req, res) => {
  try {
    const data = await Product.find({Brand:'Puma'}).exec();
    res.status(200).send(data);

  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  }
});


app.get("/product/get/Adidas", async (req, res) => {
  try {
    const data = await Product.find({Brand:'Adidas'}).exec();
    res.status(200).send(data);

  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  }
});


app.get("/product/get/Nike", async (req, res) => {
  try {
    const data = await Product.find({Brand:'Nike'}).exec();
    res.status(200).send(data);

  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  }
});


app.get("/product/get/HnM", async (req, res) => {
  try {
    const data = await Product.find({Brand:'H&M'}).exec();
    res.status(200).send(data);

  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  }
});



app.get("/product/get/Zara", async (req, res) => {
  try {
    const data = await Product.find({Brand:'Zara'}).exec();
    res.status(200).send(data);

  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  }
});

app.get("/product/get/Jeans", async (req, res) => {
  try {
    const data = await Product.find({Category:'Jeans'}).exec();
    res.status(200).send(data);
  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  }
});

app.get("/product/get/Handbag", async (req, res) => {
  try {
    const data = await Product.find({Category:'Handbag'}).exec();
    res.status(200).send(data);
  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  }
});

app.get("/product/get/Pant", async (req, res) => {
  try {
    const data = await Product.find({Category:'Pant'}).exec();
    res.status(200).send(data);
  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  }
});

app.get("/product/get/Shoes", async (req, res) => {
  try {
    const data = await Product.find({Category:'Shoes'}).exec();
    res.status(200).send(data);
  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  }
});

app.get("/product/get/Shirt", async (req, res) => {
  try {
    const data = await Product.find({Category:'Shirt'}).exec();
    res.status(200).send(data);
  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  }
});

app.get("/product/get/Tshirt", async (req, res) => {
  try {
    const data = await Product.find({Category:'Tshirt'}).exec();
    res.status(200).send(data);

  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  } 
});

app.get("/product/get/Men", async (req, res) => {
  try {
    const data = await Product.find({Gender:'Men'}).exec();
    res.status(200).send(data);

  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  } 
});

app.get("/product/get/Women", async (req, res) => {
  try {
    const data = await Product.find({Gender:'Women'}).exec();
    res.status(200).send(data);

  } catch (err) {
    console.error(err); 
    res.status(500).send(err.message);
  } 
});



// app.get("/products/:name", async (req, res) => {
//   const productName = req.params.name;

//   try {
//     const product = await Product.find({ Name: productName }).exec();

//     if (!product) {
//       return res.status(404).send("product not found");
//     }

//     res.status(200).send(product);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err.message);
//   }
// });
app.get("/product/get/:name", async (req, res) => {
  const productName = req.params.name;
  try {
    const product = await Product.find({Name: productName}).exec();

    if (!product) {
      return res.status(404).send("product not found");
    }

    res.status(200).send(product);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});


app.post("/product/add", async (req, res) => {
  const productData = req.body;

  try {
    const newproduct = new Product(productData);
    const savedproduct = await newproduct.save();
    res.status(201).send(savedproduct);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});


app.put('/api/product/modify/:name', async (req, res) => {
  const productName = req.params.name;
  const updatedproductData = req.body;

  try {
    const updatedproduct = await Product.findOneAndUpdate({Name: productName}, updatedproductData, {
      new: true,
    });

    if (!updatedproduct) {
      return res.status(404).send('product not found');
    }

    res.status(200).send(updatedproduct);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
})



app.delete('/api/product/delete/:name', async (req, res) => {
  const productName = req.params.name;

  try {
    const deletedproduct = await Product.findOneAndDelete({ Name: productName });

    if (!deletedproduct) {
      return res.status(404).send('product not found');
    }

    res.status(200).send(deletedproduct);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});




app.listen(port, () => console.log("Listening on port : ",port));
