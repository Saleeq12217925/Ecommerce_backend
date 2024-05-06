const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Saleeq19:tsiQiNJwkr37c25h@cluster0.upv3x3p.mongodb.net/mongodb"
);
const Product = mongoose.model("product", {
  name: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true
  },
  image: {
    type: [String],
    required: true,
  },
  color: {
    type: [String],
    required: true,
  },
  size: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type : Number
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});


app.post("/addproduct", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    discription : req.body.discription,
    category: req.body.category,
    image : req.body.image,
    color : req.body.color,
    size : req.body.size,
    price: parseInt(req.body.price),
    discount: parseInt(req.body.discount)
  });
  await product.save();

  res.json({
    msg: "added",
    prd : product
  });
});

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({
    _id: req.body.id,
  });
  res.json({
    status : true,
  });
});

app.get("/allproduct", async (req, res) => {
  let product = await Product.find({});
  res.json(product);
});

app.post("/product-id", async(req, res) => {
  let product = await Product.find({
      _id : req.body.id
  });
  res.json(product);
})

app.listen(3000, () => {
  console.log("app is running at port : 3000");
});
