import * as mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
export const ProductsSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number,
    id: Number,
});
export const AuthSchema = new mongoose.Schema({
    token: String,
});
export const ProductModel = mongoose.model('main', ProductsSchema, 'main');
export const AuthModel = mongoose.model('auth', AuthSchema, 'auth');
