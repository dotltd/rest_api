import { Body, Injectable, Query } from '@nestjs/common';
import { ProductModel } from './modules/database.module';
import { ProductsInterface} from "./products.interface";
import { addAuth, checkAuth } from "./modules/auth.module";
/*
 * TODO: Realise fetch queries
 * TODO: Purge Fix
 */
@Injectable()
export class ProductsService {
    // Delete one element
    async del(id: number, auth: string): Promise<object> {
        if (!checkAuth(auth))
            return { message: 'You have no access to this method.' };
        try {
            await ProductModel.deleteOne({ id: id });
        } catch (err) {
            return err.stack;
        }
        return { message: `Deleted object with id: ${id}` };
    }
    // Post new item into a database
    async post(body: ProductsInterface): Promise<object> {
        var checker = await ProductModel.findOne({ id: body.id }).exec();
        if (checker) return { message: 'Object already exists' };
        let data = {
            id: body.id,
            quantity: body.quantity,
            name: body.name,
            price: body.price
        }
        var mongoData = new ProductModel(data);
        await mongoData.save();
        return data;
    }
    // Fetch all items
    async fetch(): Promise<object> {
        let data = await ProductModel.find(
            {},
            { _id: false, id: false, __v: false },
        );
        return data;
    }
    // Useless main page
    async mainPage(): Promise<string> {
        let links = [
            '<a href="/products/fetch">Fetch</a>',
            '<a href="/products/post">Post</a>',
        ];
        return links.join('<br>');
    }
    async purge(auth): Promise<object> {
        if (!checkAuth(auth))
            return { message: 'You have no access to this method.' };
        try {
            await ProductModel.deleteMany({ name: /.*/ });
        } catch (err) {
            return err.stack;
        }
        return { message: `Purged the entire database.` };
    }
    async addAuth(param: string): Promise<object> {
        return await addAuth(param)
    }
}
