import * as mongoose from 'mongoose';
mongoose.connect("mongodb://localhost:27017/nesttys",{useNewUrlParser: true, useUnifiedTopology: true})
export var ProductsSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    price:  Number,
    id: Number
})
export var AuthSchema = new mongoose.Schema({
    token: String
})
export var ProductModel = mongoose.model('main', ProductsSchema, "main")
export var AuthModel = mongoose.model('auth', AuthSchema, "auth")